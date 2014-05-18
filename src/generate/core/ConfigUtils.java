package generate.core;

import generate.control.interfaces.HasPropertiesConfig;
import generate.form.MainFrame;
import generate.log.LogUtils;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.Properties;

public class ConfigUtils {
	private static Properties properties;

	public static Properties getProperties() {
		try {
			if (properties == null) {
				properties = new Properties();
				File file = new File("config.properties");
				if (!file.exists()) {
					file.createNewFile();
				}
				InputStream in = new FileInputStream(file);
				properties.load(in);
				in.close();
			}
		} catch (Exception ex) {
			LogUtils.logError(ex);
		}
		return properties;
	}

	public static void loadProperties() {
		for (HasPropertiesConfig propertiesConfig : ComponentUtils
				.getAllComponents(MainFrame.getInstance(),
						HasPropertiesConfig.class)) {
			if (propertiesConfig.isAllowSaveConfig()) {
				propertiesConfig.loadPropertiesConfig(getProperties());
			}
		}
	}

	public static void saveProperties() {
		for (HasPropertiesConfig propertiesConfig : ComponentUtils
				.getAllComponents(MainFrame.getInstance(),
						HasPropertiesConfig.class)) {
			if (propertiesConfig.isAllowSaveConfig()) {
				propertiesConfig.savePropertiesConfig(getProperties());
			}
		}
		try {
			File file = new File("config.properties");
			if (!file.exists()) {
				file.createNewFile();
			}
			OutputStream out = new FileOutputStream(file);
			properties.store(out, "Properties config generate");
		} catch (Exception ex) {
			LogUtils.logError(ex);
		}
	}

}
