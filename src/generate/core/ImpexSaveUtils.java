package generate.core;

import generate.control.interfaces.HasImpexSave;
import generate.form.MainFrame;
import generate.log.LogUtils;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.util.Properties;

import javax.swing.JFileChooser;
import javax.swing.filechooser.FileNameExtensionFilter;

public class ImpexSaveUtils {
	private static JFileChooser fileChooserImpex;

	private static JFileChooser getFileChooser() {
		if (fileChooserImpex == null) {
			fileChooserImpex = new JFileChooser();
			fileChooserImpex.setName("fileChooserImpex");
			FileNameExtensionFilter filter = new FileNameExtensionFilter(
					"Impex source", "impexsrc");
			fileChooserImpex.setFileFilter(filter);
		}
		return fileChooserImpex;
	}

	public static void loadFromProperties() {
		try {
			if (ConfigUtils.getProperties().get(getFileChooser().getName()) != null) {
				getFileChooser().setCurrentDirectory(
						new File(ConfigUtils.getProperties()
								.get(getFileChooser().getName()).toString()));
			}
			int returnVal = getFileChooser().showOpenDialog(
					MainFrame.getInstance());
			if (returnVal == JFileChooser.APPROVE_OPTION) {
				Properties impexsource = new Properties();
				impexsource.load(new FileInputStream(getFileChooser()
						.getSelectedFile()));
				ConfigUtils.getProperties().setProperty(
						getFileChooser().getName(),
						getFileChooser().getSelectedFile().getParent());
				for (HasImpexSave hasImpexSave : ComponentUtils
						.getAllComponents(MainFrame.getInstance(),
								HasImpexSave.class)) {
					if (hasImpexSave.isAllowSave()) {
						hasImpexSave.loadFromProperties(impexsource);
					}
				}
			}
		} catch (Exception ex) {
			LogUtils.logError(ex);
		}
	}

	public static void saveToProperties() {
		try {
			if (ConfigUtils.getProperties().get(getFileChooser().getName()) != null) {
				getFileChooser().setCurrentDirectory(
						new File(ConfigUtils.getProperties()
								.get(getFileChooser().getName()).toString()));
			}
			String defaultFileName = GenerateUtils
					.replace("@BASE_PRODUCT_CODE@.impexsrc");
			getFileChooser().setSelectedFile(new File(defaultFileName));
			int returnVal = getFileChooser().showSaveDialog(
					MainFrame.getInstance());

			if (returnVal == JFileChooser.APPROVE_OPTION) {
				Properties impexsource = new Properties();
				ConfigUtils.getProperties().setProperty(
						getFileChooser().getName(),
						getFileChooser().getSelectedFile().getParent());
				for (HasImpexSave hasImpexSave : ComponentUtils
						.getAllComponents(MainFrame.getInstance(),
								HasImpexSave.class)) {
					if (hasImpexSave.isAllowSave()) {
						hasImpexSave.saveToProperties(impexsource);
					}
				}
				if (!getFileChooser().getSelectedFile().exists()) {
					getFileChooser().getSelectedFile().createNewFile();
				}
				impexsource.store(new FileOutputStream(getFileChooser()
						.getSelectedFile()), "Properties impex source");
				GenerateUtils.generate(getFileChooser().getSelectedFile()
						.getParentFile());

			}
		} catch (Exception ex) {
			LogUtils.logError(ex);
		}
	}
}
