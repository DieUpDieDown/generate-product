package generate.control.interfaces;

import java.util.Properties;

public interface HasPropertiesConfig {
	void savePropertiesConfig(Properties properties);

	void loadPropertiesConfig(Properties properties);

	boolean isAllowSaveConfig();

	void setIsAllowSaveConfig(boolean isSaveConfig);
}
