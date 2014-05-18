package generate.control.impls;

import generate.control.interfaces.HasImpexSave;
import generate.control.interfaces.HasName;
import generate.control.interfaces.HasReference;
import generate.control.interfaces.HasReplace;
import generate.control.interfaces.HasReplaceScript;
import generate.control.interfaces.HasTextRuleScript;
import generate.core.GenerateUtils;
import generate.events.Message;
import generate.events.MessageProcessing;
import generate.log.LogUtils;

import java.util.Properties;

import javax.swing.JCheckBox;

public class JCheckboxReplace extends JCheckBox implements HasReplaceScript,
		HasName, HasReplace, HasTextRuleScript, HasReference, HasImpexSave {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String findText;
	private String replaceText;
	private boolean isLiteral;
	private String textRuleSource;
	private String[] reference;

	private MessageProcessing messageProcessing = new MessageProcessing(this) {

		@Override
		public void hasReferenceValueChangeProcessing() {
			if (getTextRuleSource() != null && getTextRuleSource().length() > 0) {
				String newText = textRuleSource;
				try {
					newText = GenerateUtils.replace(newText);
					if (textRuleScript != null) {
						for (int i = 0; i < textRuleScript.length; i += 2) {
							newText = GenerateUtils.replace(newText,
									textRuleScript[i], textRuleScript[i + 1]);
						}
					}
					setSelected(newText != null && newText.length() > 0);
				} catch (Exception e) {
					LogUtils.logError(e);
				}

			}
		}
	};

	public String[] getReference() {
		return reference;
	}

	public void setReference(String[] reference) {
		this.reference = reference;
	}

	public String getTextRuleSource() {
		return textRuleSource;
	}

	public void setTextRuleSource(String textRuleSource) {
		this.textRuleSource = textRuleSource;
	}

	public String[] getTextRuleScript() {
		return textRuleScript;
	}

	public void setTextRuleScript(String[] textRuleScript) {
		this.textRuleScript = textRuleScript;
	}

	String[] textRuleScript;
	private boolean isAllowSave = true;

	public String getFindText() {
		return findText;
	}

	public void setFindText(String findText) {
		this.findText = findText;
		setToolTipText(findText);
	}

	public String getReplaceText() {
		return replaceText;
	}

	public void setReplaceText(String replaceText) {
		this.replaceText = replaceText;
	}

	public boolean isLiteral() {
		return isLiteral;
	}

	public void setLiteral(boolean isLiteral) {
		this.isLiteral = isLiteral;
	}

	@Override
	public String[][] getReplaceScript() {
		String[][] scripts = new String[1][2];
		scripts[0][0] = findText;
		if (isSelected()) {
			scripts[0][1] = replaceText;
			scripts[0][1] = scripts[0][1].replaceAll(
					"@TRUE:START@(.*?)@TRUE:END@", "$1");
			scripts[0][1] = scripts[0][1].replaceAll(
					"@FALSE:START@(.*?)@FALSE:END@", "");
		} else {
			scripts[0][1] = replaceText;
			scripts[0][1] = scripts[0][1].replaceAll(
					"@TRUE:START@(.*?)@TRUE:END@", "");
			scripts[0][1] = scripts[0][1].replaceAll(
					"@FALSE:START@(.*?)@FALSE:END@", "$1");
		}
		return scripts;

	}

	@Override
	public void putMessage(Message message) {
		messageProcessing.putMessage(message);
	}

	@Override
	public void loadFromProperties(Properties properties) {
		if (properties.getProperty(getName()) != null) {
			setSelected(Boolean.parseBoolean(properties.getProperty(getName())));
		}
	}

	@Override
	public void saveToProperties(Properties properties) {
		properties.setProperty(getName(), isSelected() + "");
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
