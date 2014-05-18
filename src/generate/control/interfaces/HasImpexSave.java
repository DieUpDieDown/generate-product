package generate.control.interfaces;

import java.util.Properties;

public interface HasImpexSave {
	void loadFromProperties(Properties properties);

	void saveToProperties(Properties properties);

	boolean isAllowSave();

	void setIsAllowSave(boolean isAllowSave);
}
