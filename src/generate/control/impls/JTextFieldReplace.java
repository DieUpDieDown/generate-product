package generate.control.impls;

import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

import generate.control.interfaces.HasData;
import generate.control.interfaces.HasImpexSave;
import generate.control.interfaces.HasName;
import generate.control.interfaces.HasPropertiesConfig;
import generate.control.interfaces.HasReference;
import generate.control.interfaces.HasReplace;
import generate.control.interfaces.HasReplaceScript;
import generate.control.interfaces.HasTextRuleScript;
import generate.core.GenerateUtils;
import generate.events.Message;
import generate.events.MessageProcessing;
import generate.events.MessageUtils;
import generate.log.LogUtils;

import javax.swing.JTextField;
import javax.swing.event.DocumentEvent;
import javax.swing.event.DocumentListener;

public class JTextFieldReplace extends JTextField implements HasName,
		HasReference, HasReplace, HasTextRuleScript, HasReplaceScript, HasData,
		HasPropertiesConfig, HasImpexSave {
	private static final long serialVersionUID = 1L;
	private String name;
	private String findText;
	private String replaceText;
	private String[] references;
	private String textRuleSource;
	private String[] textRuleScript;
	private boolean isLiteral;
	private boolean isAllowSaveConfig;
	private boolean isAllowSave = true;
	private final Map<String, String> mapData = new HashMap<String, String>();

	public boolean isLiteral() {
		return isLiteral;
	}

	public void setLiteral(boolean isLiteral) {
		this.isLiteral = isLiteral;
	}

	public String getStringSource() {
		return textRuleSource;
	}

	public void setStringSource(String stringSource) {
		this.textRuleSource = stringSource;
	}

	private MessageProcessing messageProcessing = new MessageProcessing(this) {

		@Override
		public void hasReferenceValueChangeProcessing() {
			String newText = textRuleSource;
			try {
				newText = GenerateUtils.replace(newText);
				if (textRuleScript != null) {
					for (int i = 0; i < textRuleScript.length; i += 2) {
						newText = GenerateUtils.replace(newText,
								textRuleScript[i], textRuleScript[i + 1]);
					}
				}
				setText(GenerateUtils.replace(newText));
			} catch (Exception e) {
				LogUtils.logError(e);
			}
		}
	};
	private DocumentListener documentListener = new DocumentListener() {
		private void update(DocumentEvent e) {
			MessageUtils.getInstance().putValueChangeMessage(
					JTextFieldReplace.this);
		}

		@Override
		public void removeUpdate(DocumentEvent e) {
			update(e);
		}

		@Override
		public void insertUpdate(DocumentEvent e) {
			update(e);
		}

		@Override
		public void changedUpdate(DocumentEvent e) {
			update(e);
		}
	};

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getFindText() {
		return findText;
	}

	public void setFindText(String findText) {
		this.findText = findText;
		setToolTipText(findText);
	}

	public String getReplaceText() {
		if (replaceText == null || replaceText.length() == 0) {
			return getText();
		}
		return replaceText;
	}

	public void setReplaceText(String replaceText) {
		this.replaceText = replaceText;
	}

	public String[] getReference() {
		return references;
	}

	public void setReference(String[] reference) {
		this.references = reference;
		MessageUtils.getInstance().putReferenceChange(this);
	}

	@Override
	public void putMessage(Message message) {
		messageProcessing.putMessage(message);
	}

	public JTextFieldReplace() {
		super();
		getDocument().addDocumentListener(documentListener);
	}

	@Override
	public String[][] getReplaceScript() {
		return new String[][] { new String[] { getFindText(), getReplaceText() } };
	}

	@Override
	public String getTextRuleSource() {
		return this.textRuleSource;
	}

	@Override
	public void setTextRuleSource(String source) {
		this.textRuleSource = source;
	}

	@Override
	public String[] getTextRuleScript() {
		return this.textRuleScript;
	}

	@Override
	public void setTextRuleScript(String[] replaceTextProcessingScript) {
		this.textRuleScript = replaceTextProcessingScript;
	}

	@Override
	public String getValue(String key) {
		return this.mapData.get(key);
	}

	@Override
	public void putValue(String key, String value) {
		this.mapData.put(key, value);
	}

	@Override
	public void savePropertiesConfig(Properties properties) {
		properties.setProperty(getName(), getText());
	}

	@Override
	public void loadPropertiesConfig(Properties properties) {
		setText(properties.getProperty(getName()));
	}

	@Override
	public boolean isAllowSaveConfig() {
		return isAllowSaveConfig;
	}

	@Override
	public void setIsAllowSaveConfig(boolean isSaveConfig) {
		this.isAllowSaveConfig = isSaveConfig;
	}

	@Override
	public void loadFromProperties(Properties properties) {
		setText(properties.getProperty(getName()));
	}

	@Override
	public void saveToProperties(Properties properties) {
		properties.setProperty(getName(), getText());
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
