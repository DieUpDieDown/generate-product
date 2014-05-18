package generate.form;

import generate.control.impls.JCheckboxReplace;
import generate.control.impls.JTextFieldReplace;
import generate.control.interfaces.HasCopyFileScript;
import generate.control.interfaces.HasReference;
import generate.control.interfaces.HasReplace;
import generate.core.GenerateUtils;
import generate.events.Message;
import generate.events.MessageProcessing;
import generate.events.MessageUtils;
import generate.log.LogUtils;

import java.awt.Dimension;
import java.awt.GridBagConstraints;
import java.awt.GridBagLayout;
import java.awt.Insets;
import java.text.MessageFormat;

import javax.swing.JLabel;
import javax.swing.JPanel;

public class ImagePanel extends JPanel implements HasCopyFileScript,
		HasReplace, HasReference {
	private String findText;
	private String replaceText;
	private static final long serialVersionUID = 1L;
	private JLabel lbImage;
	private JTextFieldReplace tfVariantImageReplace;
	private JCheckboxReplace cbImage;
	private boolean isLiteral;
	private String textRuleSource;
	private String[] textRuleScript;
	private String[] reference;

	private final MessageProcessing messageProcessing = new MessageProcessing(
			this) {

		@Override
		public void hasReferenceValueChangeProcessing() {
			String newText = textRuleSource;
			try {
				newText = GenerateUtils.replace(newText);
				if (textRuleScript != null) {
					for (int i = 0; i < textRuleScript.length; i += 2) {
						if (newText.matches(textRuleScript[0])) {
							newText = GenerateUtils.replace(newText,
									textRuleScript[i], textRuleScript[i + 1]);
							cbImage.setSelected(true);
						} else {
							newText = "";
							cbImage.setSelected(false);
						}
					}
				}

				tfVariantImageReplace.setText(GenerateUtils.replace(newText)
						.replaceAll(".+\\\\([^\\\\]+)", "$1"));
				tfVariantImageReplaceSize.setText(GenerateUtils
						.replace(newText).replaceAll(
								".+\\\\[^\\\\]+?(\\d+)x(\\d+)(?:_\\d)?\\.png",
								"$1Wx$2H"));
				if (cbImage.isSelected()) {
					copyFileScript = new String[1][2];
					copyFileScript[0][0] = newText;
					if (lbImage.getText().equals("96Wx96H_1")
							|| lbImage.getText().equals("300Wx300H_1")) {
						tfVariantImageReplace.setText(tfVariantImageReplace
								.getText().replaceAll("(.+)(?:_1)?\\.png",
										"$1_1\\.png"));
						tfVariantImageReplace.setText(tfVariantImageReplace
								.getText().replace("_1_1", "_1"));
						copyFileScript[0][1] = MessageFormat.format(
								"@PRODUCT_CATALOG_IMAGE_FOLER@\\{0}\\{1}",
								tfVariantImageReplaceSize.getFindText(),
								tfVariantImageReplace.getText());
					} else {
						copyFileScript[0][1] = MessageFormat.format(
								"@PRODUCT_CATALOG_IMAGE_FOLER@\\{0}\\{1}",
								tfVariantImageReplaceSize.getFindText(),
								tfVariantImageReplace.getText());
					}
				} else {
					copyFileScript = null;
				}
			} catch (Exception e) {
				LogUtils.logError(e);
			}
		}
	};
	@SuppressWarnings("unused")
	private final int variantNumber;
	private String[][] copyFileScript = new String[0][0];
	private JTextFieldReplace tfVariantImageReplaceSize;

	public ImagePanel(String imageFormat, int variantNumber) {
		setMaximumSize(new Dimension(32767, 0));
		this.variantNumber = variantNumber;
		GridBagLayout gridBagLayout = new GridBagLayout();
		gridBagLayout.columnWidths = new int[] { 95, 0, 83, 0, 0 };
		gridBagLayout.rowHeights = new int[] { 0, 0 };
		gridBagLayout.columnWeights = new double[] { 0.0, 12.0, 0.0, 0.0,
				Double.MIN_VALUE };
		gridBagLayout.rowWeights = new double[] { 0.0, Double.MIN_VALUE };
		setLayout(gridBagLayout);

		lbImage = new JLabel(imageFormat);
		GridBagConstraints gbc_lbImage = new GridBagConstraints();
		gbc_lbImage.anchor = GridBagConstraints.EAST;
		gbc_lbImage.insets = new Insets(0, 0, 0, 5);
		gbc_lbImage.gridx = 0;
		gbc_lbImage.gridy = 0;
		add(lbImage, gbc_lbImage);

		tfVariantImageReplace = new JTextFieldReplace();
		tfVariantImageReplace.setName(MessageFormat.format(
				"tfVariant{0}ImageReplace{1}", variantNumber, imageFormat));
		tfVariantImageReplace.setFindText(MessageFormat.format(
				"@IMAGE_FILE_{0}_{1}@", variantNumber + "", imageFormat));
		GridBagConstraints gbc_tfImageReplace = new GridBagConstraints();
		gbc_tfImageReplace.insets = new Insets(0, 0, 0, 5);
		gbc_tfImageReplace.fill = GridBagConstraints.HORIZONTAL;
		gbc_tfImageReplace.gridx = 1;
		gbc_tfImageReplace.gridy = 0;
		add(tfVariantImageReplace, gbc_tfImageReplace);

		tfVariantImageReplaceSize = new JTextFieldReplace();
		tfVariantImageReplaceSize.setName(MessageFormat.format(
				"tfVariant{0}ReplaceSize{1}", variantNumber, imageFormat));
		tfVariantImageReplaceSize.setFindText(MessageFormat.format(
				"@IMAGE_FILE_SIZE_{0}_{1}@", variantNumber + "", imageFormat));
		GridBagConstraints gbc_tfImageReplaceSize = new GridBagConstraints();
		gbc_tfImageReplaceSize.insets = new Insets(0, 0, 0, 5);
		gbc_tfImageReplaceSize.fill = GridBagConstraints.HORIZONTAL;
		gbc_tfImageReplaceSize.gridx = 2;
		gbc_tfImageReplaceSize.gridy = 0;
		add(tfVariantImageReplaceSize, gbc_tfImageReplaceSize);

		cbImage = new JCheckboxReplace();
		cbImage.setReplaceText("@TRUE:START@$1@TRUE:END@@FALSE:START@$1@FALSE:END@");
		cbImage.setName(MessageFormat.format("cbVariant{0}ImageReplace{1}",
				variantNumber, imageFormat));
		cbImage.setFindText(MessageFormat
				.format("@IMAGE_FILE_BLOCK_{0}_{1}:START@(.+?)@IMAGE_FILE_BLOCK_{0}_{1}:END@",
						variantNumber + "", imageFormat));
		GridBagConstraints gbc_cbImage = new GridBagConstraints();
		gbc_cbImage.gridx = 3;
		gbc_cbImage.gridy = 0;
		add(cbImage, gbc_cbImage);
	}

	public String[][] getCopyFileScript() {
		return copyFileScript;
	}

	public void setCopyFileScript(String[][] copyFileScript) {
		this.copyFileScript = copyFileScript;
	}

	public String getFindText() {
		return findText;
	}

	public void setFindText(String findText) {
		this.findText = findText;
	}

	public String getReplaceText() {
		return replaceText;
	}

	public void setReplaceText(String replaceText) {
		this.replaceText = replaceText;
	}

	@Override
	public boolean isLiteral() {
		return isLiteral;
	}

	@Override
	public void setLiteral(boolean isLiteral) {
		this.isLiteral = isLiteral;
	}

	@Override
	public void putMessage(Message message) {
		messageProcessing.putMessage(message);
	}

	@Override
	public String getTextRuleSource() {
		return textRuleSource;
	}

	@Override
	public void setTextRuleSource(String textRuleSource) {
		this.textRuleSource = textRuleSource;
	}

	@Override
	public String[] getTextRuleScript() {
		return textRuleScript;
	}

	@Override
	public void setTextRuleScript(String[] textRuleScript) {
		this.textRuleScript = textRuleScript;
	}

	@Override
	public void setReference(String[] reference) {
		this.reference = reference;
		MessageUtils.getInstance().putReferenceChange(this);
	}

	@Override
	public String[] getReference() {
		return reference;
	}
}
