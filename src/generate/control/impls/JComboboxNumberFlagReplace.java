package generate.control.impls;

import java.util.Properties;

import generate.control.interfaces.HasImpexSave;
import generate.control.interfaces.HasMultiReplace;
import generate.control.interfaces.HasName;
import generate.control.interfaces.HasReplaceScript;
import generate.events.MessageUtils;

import javax.swing.DefaultComboBoxModel;
import javax.swing.JComboBox;
import javax.swing.event.PopupMenuListener;
import javax.swing.event.PopupMenuEvent;

public class JComboboxNumberFlagReplace extends JComboBox<Long> implements
		HasMultiReplace, HasName, HasReplaceScript, HasImpexSave {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String[] findTexts;
	private String[] replaceTexts;
	private boolean isLiteral;
	private boolean isAllowSave = true;

	public JComboboxNumberFlagReplace(int from, int to) {
		super();
		addPopupMenuListener(new PopupMenuListener() {
			public void popupMenuCanceled(PopupMenuEvent arg0) {
			}

			public void popupMenuWillBecomeInvisible(PopupMenuEvent arg0) {
				MessageUtils.getInstance().putValueChangeMessage(
						JComboboxNumberFlagReplace.this);
			}

			public void popupMenuWillBecomeVisible(PopupMenuEvent arg0) {
			}
		});
		Long[] model = new Long[to - from + 1];
		for (int i = 0; i < to - from + 1; i++) {
			model[i] = Long.valueOf(from + i);
		}
		setModel(new DefaultComboBoxModel<Long>(model));
	}

	@Override
	public String[] getFindTexts() {
		return this.findTexts;
	}

	@Override
	public void setFindTexts(String[] findTexts) {
		this.findTexts = findTexts;
	}

	@Override
	public String[] getReplaceTexts() {
		return this.replaceTexts;
	}

	@Override
	public void setReplaceTexts(String[] replaceText) {
		this.replaceTexts = replaceText;
	}

	@Override
	public boolean isLiteral() {
		return this.isLiteral;
	}

	@Override
	public void setLiteral(boolean isInterval) {
		this.isLiteral = isInterval;
	}

	@Override
	public String[][] getReplaceScript() {
		String[][] scripts = new String[findTexts.length][2];
		for (int i = 0; i < findTexts.length; i++) {
			scripts[i][0] = findTexts[i];
			if (i <= getSelectedIndex()) {
				scripts[i][1] = replaceTexts[i];
				scripts[i][1] = scripts[i][1].replaceAll(
						"@TRUE:START@(.*?)@TRUE:END@", "$1");
				scripts[i][1] = scripts[i][1].replaceAll(
						"@FALSE:START@(.*?)@FALSE:END@", "");
			} else {
				scripts[i][1] = replaceTexts[i];
				scripts[i][1] = scripts[i][1].replaceAll(
						"@TRUE:START@(.*?)@TRUE:END@", "");
				scripts[i][1] = scripts[i][1].replaceAll(
						"@FALSE:START@(.*?)@FALSE:END@", "$1");
			}
		}
		return scripts;
	}

	@Override
	public void loadFromProperties(Properties properties) {
		if (properties.getProperty(getName()) != null) {
			setSelectedItem(Long.parseLong((properties.getProperty(getName()))));
			MessageUtils.getInstance().putValueChangeMessage(this);
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
