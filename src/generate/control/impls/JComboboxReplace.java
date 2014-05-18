package generate.control.impls;

import generate.control.interfaces.HasImpexSave;
import generate.control.interfaces.HasName;
import generate.control.interfaces.HasReplace;
import generate.control.interfaces.HasReplaceScript;
import generate.events.MessageUtils;

import java.util.Properties;

import javax.swing.JComboBox;
import javax.swing.event.PopupMenuEvent;
import javax.swing.event.PopupMenuListener;

public class JComboboxReplace extends JComboBox<String> implements
		HasReplaceScript, HasReplace, HasName, HasImpexSave {
	public JComboboxReplace() {
		addPopupMenuListener(new PopupMenuListener() {
			public void popupMenuCanceled(PopupMenuEvent arg0) {
			}

			public void popupMenuWillBecomeInvisible(PopupMenuEvent arg0) {
				MessageUtils.getInstance().putValueChangeMessage(
						JComboboxReplace.this);
			}

			public void popupMenuWillBecomeVisible(PopupMenuEvent arg0) {
			}
		});
	}

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String findText;
	private String replaceText;
	private boolean isLiteral;
	private boolean isAllowSave = true;

	public String getFindText() {
		return findText;
	}

	public void setFindText(String findText) {
		this.findText = findText;
	}

	public String getReplaceText() {
		if (replaceText == null || replaceText.length() == 0) {
			return getSelectedItem().toString();
		}
		return replaceText;
	}

	public void setReplaceText(String replaceText) {
		this.replaceText = replaceText;
	}

	@Override
	public void setLiteral(boolean isInterval) {
		this.isLiteral = isInterval;
	}

	@Override
	public String[][] getReplaceScript() {
		return new String[][] { new String[] { getFindText(), getReplaceText() } };
	}

	@Override
	public boolean isLiteral() {
		return this.isLiteral;
	}

	@Override
	public void loadFromProperties(Properties properties) {
		if (properties.getProperty(getName())!=null){
			setSelectedItem(properties.getProperty(getName()));			
		}
	}

	@Override
	public void saveToProperties(Properties properties) {
		properties.setProperty(getName(), getSelectedItem().toString());
	}

	@Override
	public boolean isAllowSave() {
		return isAllowSave;
	}

	@Override
	public void setIsAllowSave(boolean isAllowSave) {
		this.isAllowSave = isAllowSave;
	}

}
