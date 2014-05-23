package generate.form;

import generate.control.impls.JButtonReplace;
import generate.control.impls.JTextFieldReplace;
import generate.control.interfaces.HasCopyFileScript;
import generate.control.interfaces.HasName;
import generate.control.interfaces.HasReference;
import generate.control.interfaces.HasVisiableRule;
import generate.core.ComponentUtils;
import generate.core.GenerateUtils;
import generate.events.Message;
import generate.events.Message.MessageType;
import generate.events.MessageUtils;
import generate.library.FileUtils;

import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.GridBagConstraints;
import java.awt.GridBagLayout;
import java.awt.Insets;
import java.awt.SystemColor;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.File;
import java.io.IOException;
import java.text.MessageFormat;

import javax.swing.JButton;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTabbedPane;
import javax.swing.border.LineBorder;

public class VariantPanel extends JPanel implements HasVisiableRule,
		HasReference, HasName {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String[] reference;
	private String textVisiableRule;
	private ImagePanel image30Wx32H;
	private ImagePanel image96Wx96H_1;
	private ImagePanel image125Wx90H;
	private ImagePanel image96Wx96H_2;
	private ImagePanel image128Wx114H;
	private ImagePanel image96Wx96H_3;
	private ImagePanel image128Wx85H;
	private ImagePanel image300Wx300H_1;
	private ImagePanel image130Wx130H;
	private ImagePanel image300Wx300H_2;
	private ImagePanel image130Wx80H;
	private ImagePanel image300Wx300H_3;
	private ImagePanel image138Wx80H;
	private ImagePanel image164Wx115H;
	private JTextFieldReplace tfVariantSummaryRichText;
	private JTextFieldReplace tfVariantSummary;
	private JTextFieldReplace tfVariantPromotion;
	private JTextFieldReplace tfVariantWasPrices;
	private JTextFieldReplace tfVariantPrices;
	private JTextFieldReplace tfVariantCode;
	private JTextFieldReplace tfVariantName;
	private JButton btnVariantNamePaste;
	private JButton btnVariantCodePaste;
	private JButton btnVariantPricesPaste;
	private JButton btnVariantWasPricesPaste;
	private JButton btnVariantPromotionPaste;
	private JButton btnVariantSummaryPaste;
	private JButton btnVariantSummaryRichTextPaste;
	private JButtonReplace btnVariantUpdateImage;
	private JButton btnCopyImage;
	private ImagePanel image300Wx180H;
	private ImagePanel image220Wx120H;
	private JPanel panelImage;
	private ImagePanel image300Wx300H_4;
	private ImagePanel image300Wx300H_5;
	private ImagePanel image300Wx300H_6;
	private ImagePanel image96Wx96H_4;
	private ImagePanel image96Wx96H_5;
	private ImagePanel image96Wx96H_6;
	private ImagePanel image96Wx96H_7;
	private ImagePanel image96Wx96H_8;
	private ImagePanel image300Wx300H_7;
	private ImagePanel image300Wx300H_8;

	public VariantPanel(int variantNumber) {
		super();
		setTextVisiableRule(MessageFormat.format(
				"@VARIANT{0}:START@1@VARIANT{0}:END@", variantNumber));

		setName("VariantPanel" + variantNumber);
		setLayout(new BorderLayout(0, 0));

		JPanel panel = new JPanel();
		add(panel, BorderLayout.NORTH);
		GridBagLayout gbl_panel = new GridBagLayout();
		gbl_panel.columnWidths = new int[] { 0, 24, 0, 0 };
		gbl_panel.rowHeights = new int[] { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
		gbl_panel.columnWeights = new double[] { 0.0, 1.0, 0.0,
				Double.MIN_VALUE };
		gbl_panel.rowWeights = new double[] { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
				0.0, 1.0, 0.0, Double.MIN_VALUE };
		panel.setLayout(gbl_panel);

		JLabel label = new JLabel("Variant name");
		GridBagConstraints gbc_label = new GridBagConstraints();
		gbc_label.insets = new Insets(0, 0, 5, 5);
		gbc_label.anchor = GridBagConstraints.EAST;
		gbc_label.gridx = 0;
		gbc_label.gridy = 0;
		panel.add(label, gbc_label);

		tfVariantName = new JTextFieldReplace();
		tfVariantName.setFindText(MessageFormat.format("@VARIANT_{0}_NAME@",
				variantNumber));
		tfVariantName.setName(MessageFormat.format("tfVariant{0}Name",
				variantNumber));
		GridBagConstraints gbc_tfVariantName = new GridBagConstraints();
		gbc_tfVariantName.insets = new Insets(0, 0, 5, 5);
		gbc_tfVariantName.fill = GridBagConstraints.HORIZONTAL;
		gbc_tfVariantName.gridx = 1;
		gbc_tfVariantName.gridy = 0;
		panel.add(tfVariantName, gbc_tfVariantName);

		btnVariantNamePaste = new JButton("Paste");
		GridBagConstraints gbc_btnVariantNamePaste = new GridBagConstraints();
		gbc_btnVariantNamePaste.insets = new Insets(0, 0, 5, 0);
		gbc_btnVariantNamePaste.gridx = 2;
		gbc_btnVariantNamePaste.gridy = 0;
		panel.add(btnVariantNamePaste, gbc_btnVariantNamePaste);

		JLabel label_1 = new JLabel("Variant code");
		GridBagConstraints gbc_label_1 = new GridBagConstraints();
		gbc_label_1.insets = new Insets(0, 0, 5, 5);
		gbc_label_1.anchor = GridBagConstraints.EAST;
		gbc_label_1.gridx = 0;
		gbc_label_1.gridy = 1;
		panel.add(label_1, gbc_label_1);

		tfVariantCode = new JTextFieldReplace();
		tfVariantCode.setName(MessageFormat.format("tfVariantCode{0}",
				variantNumber));
		tfVariantCode.setFindText(MessageFormat.format("@VARIANT_{0}_CODE@",
				variantNumber));
		GridBagConstraints gbc_tfVariantCode = new GridBagConstraints();
		gbc_tfVariantCode.insets = new Insets(0, 0, 5, 5);
		gbc_tfVariantCode.fill = GridBagConstraints.HORIZONTAL;
		gbc_tfVariantCode.gridx = 1;
		gbc_tfVariantCode.gridy = 1;
		panel.add(tfVariantCode, gbc_tfVariantCode);

		btnVariantCodePaste = new JButton("Paste");
		GridBagConstraints gbc_btnVariantCodePaste = new GridBagConstraints();
		gbc_btnVariantCodePaste.insets = new Insets(0, 0, 5, 0);
		gbc_btnVariantCodePaste.gridx = 2;
		gbc_btnVariantCodePaste.gridy = 1;
		panel.add(btnVariantCodePaste, gbc_btnVariantCodePaste);

		JLabel label_2 = new JLabel("Variant prices");
		GridBagConstraints gbc_label_2 = new GridBagConstraints();
		gbc_label_2.anchor = GridBagConstraints.EAST;
		gbc_label_2.insets = new Insets(0, 0, 5, 5);
		gbc_label_2.gridx = 0;
		gbc_label_2.gridy = 2;
		panel.add(label_2, gbc_label_2);

		tfVariantPrices = new JTextFieldReplace();
		tfVariantPrices.setName(MessageFormat.format("tfVariantPrices{0}",
				variantNumber));
		tfVariantPrices.setFindText(MessageFormat.format(
				"@VARIANT_{0}_PRICES@", variantNumber));
		GridBagConstraints gbc_tfVariantPrices = new GridBagConstraints();
		gbc_tfVariantPrices.insets = new Insets(0, 0, 5, 5);
		gbc_tfVariantPrices.fill = GridBagConstraints.HORIZONTAL;
		gbc_tfVariantPrices.gridx = 1;
		gbc_tfVariantPrices.gridy = 2;
		panel.add(tfVariantPrices, gbc_tfVariantPrices);

		btnVariantPricesPaste = new JButton("Paste");
		GridBagConstraints gbc_btnVariantPricesPaste = new GridBagConstraints();
		gbc_btnVariantPricesPaste.insets = new Insets(0, 0, 5, 0);
		gbc_btnVariantPricesPaste.gridx = 2;
		gbc_btnVariantPricesPaste.gridy = 2;
		panel.add(btnVariantPricesPaste, gbc_btnVariantPricesPaste);

		JLabel label_3 = new JLabel("Variant was prices");
		GridBagConstraints gbc_label_3 = new GridBagConstraints();
		gbc_label_3.anchor = GridBagConstraints.EAST;
		gbc_label_3.insets = new Insets(0, 0, 5, 5);
		gbc_label_3.gridx = 0;
		gbc_label_3.gridy = 3;
		panel.add(label_3, gbc_label_3);

		tfVariantWasPrices = new JTextFieldReplace();
		tfVariantWasPrices.setName(MessageFormat.format(
				"tfVariantWasPrices{0}", variantNumber));
		tfVariantWasPrices.setFindText(MessageFormat.format(
				"@VARIANT_{0}_WAS_PRICES@", variantNumber));
		GridBagConstraints gbc_tfVariantWasPrices = new GridBagConstraints();
		gbc_tfVariantWasPrices.insets = new Insets(0, 0, 5, 5);
		gbc_tfVariantWasPrices.fill = GridBagConstraints.HORIZONTAL;
		gbc_tfVariantWasPrices.gridx = 1;
		gbc_tfVariantWasPrices.gridy = 3;
		panel.add(tfVariantWasPrices, gbc_tfVariantWasPrices);

		btnVariantWasPricesPaste = new JButton("Paste");
		GridBagConstraints gbc_btnVariantWasPricesPaste = new GridBagConstraints();
		gbc_btnVariantWasPricesPaste.insets = new Insets(0, 0, 5, 0);
		gbc_btnVariantWasPricesPaste.gridx = 2;
		gbc_btnVariantWasPricesPaste.gridy = 3;
		panel.add(btnVariantWasPricesPaste, gbc_btnVariantWasPricesPaste);

		JLabel label_4 = new JLabel("Variant promotion");
		GridBagConstraints gbc_label_4 = new GridBagConstraints();
		gbc_label_4.anchor = GridBagConstraints.EAST;
		gbc_label_4.insets = new Insets(0, 0, 5, 5);
		gbc_label_4.gridx = 0;
		gbc_label_4.gridy = 4;
		panel.add(label_4, gbc_label_4);

		tfVariantPromotion = new JTextFieldReplace();
		tfVariantPromotion.setName(MessageFormat.format(
				"tfVariantPromotion{0}", variantNumber));
		tfVariantPromotion.setFindText(MessageFormat.format(
				"@VARIANT_{0}_PROMOTION_TEXT@", variantNumber));
		GridBagConstraints gbc_tfVariantPromotion = new GridBagConstraints();
		gbc_tfVariantPromotion.insets = new Insets(0, 0, 5, 5);
		gbc_tfVariantPromotion.fill = GridBagConstraints.HORIZONTAL;
		gbc_tfVariantPromotion.gridx = 1;
		gbc_tfVariantPromotion.gridy = 4;
		panel.add(tfVariantPromotion, gbc_tfVariantPromotion);

		btnVariantPromotionPaste = new JButton("Paste");
		GridBagConstraints gbc_btnVariantPromotionPaste = new GridBagConstraints();
		gbc_btnVariantPromotionPaste.insets = new Insets(0, 0, 5, 0);
		gbc_btnVariantPromotionPaste.gridx = 2;
		gbc_btnVariantPromotionPaste.gridy = 4;
		panel.add(btnVariantPromotionPaste, gbc_btnVariantPromotionPaste);

		JLabel label_5 = new JLabel("Variant summary");
		GridBagConstraints gbc_label_5 = new GridBagConstraints();
		gbc_label_5.anchor = GridBagConstraints.EAST;
		gbc_label_5.insets = new Insets(0, 0, 5, 5);
		gbc_label_5.gridx = 0;
		gbc_label_5.gridy = 5;
		panel.add(label_5, gbc_label_5);

		tfVariantSummary = new JTextFieldReplace();
		tfVariantSummary.setName(MessageFormat.format("tfVariantSummary{0}",
				variantNumber));
		tfVariantSummary.setFindText(MessageFormat.format(
				"@VARIANT_{0}_SUMMARY@", variantNumber));
		GridBagConstraints gbc_tfVariantSummary = new GridBagConstraints();
		gbc_tfVariantSummary.insets = new Insets(0, 0, 5, 5);
		gbc_tfVariantSummary.fill = GridBagConstraints.HORIZONTAL;
		gbc_tfVariantSummary.gridx = 1;
		gbc_tfVariantSummary.gridy = 5;
		panel.add(tfVariantSummary, gbc_tfVariantSummary);

		btnVariantSummaryPaste = new JButton("Paste");
		GridBagConstraints gbc_btnVariantSummaryPaste = new GridBagConstraints();
		gbc_btnVariantSummaryPaste.insets = new Insets(0, 0, 5, 0);
		gbc_btnVariantSummaryPaste.gridx = 2;
		gbc_btnVariantSummaryPaste.gridy = 5;
		panel.add(btnVariantSummaryPaste, gbc_btnVariantSummaryPaste);

		JLabel label_6 = new JLabel("Variant summary rich text");
		GridBagConstraints gbc_label_6 = new GridBagConstraints();
		gbc_label_6.anchor = GridBagConstraints.EAST;
		gbc_label_6.insets = new Insets(0, 0, 5, 5);
		gbc_label_6.gridx = 0;
		gbc_label_6.gridy = 6;
		panel.add(label_6, gbc_label_6);

		tfVariantSummaryRichText = new JTextFieldReplace();
		tfVariantSummaryRichText.setName(MessageFormat.format(
				"tfVariantSummaryRichText{0}", variantNumber));
		tfVariantSummaryRichText.setFindText(MessageFormat.format(
				"@VARIANT_{0}_SUMMARY_RICH_TEXT@", variantNumber));
		GridBagConstraints gbc_tfVariantSummaryRichText = new GridBagConstraints();
		gbc_tfVariantSummaryRichText.insets = new Insets(0, 0, 5, 5);
		gbc_tfVariantSummaryRichText.fill = GridBagConstraints.HORIZONTAL;
		gbc_tfVariantSummaryRichText.gridx = 1;
		gbc_tfVariantSummaryRichText.gridy = 6;
		panel.add(tfVariantSummaryRichText, gbc_tfVariantSummaryRichText);

		btnVariantSummaryRichTextPaste = new JButton("Paste");
		GridBagConstraints gbc_btnVariantSummaryRichTextPaste = new GridBagConstraints();
		gbc_btnVariantSummaryRichTextPaste.insets = new Insets(0, 0, 5, 0);
		gbc_btnVariantSummaryRichTextPaste.gridx = 2;
		gbc_btnVariantSummaryRichTextPaste.gridy = 6;
		panel.add(btnVariantSummaryRichTextPaste,
				gbc_btnVariantSummaryRichTextPaste);

		JPanel panel_3 = new JPanel();
		GridBagConstraints gbc_panel_3 = new GridBagConstraints();
		gbc_panel_3.insets = new Insets(0, 0, 5, 0);
		gbc_panel_3.gridwidth = 3;
		gbc_panel_3.fill = GridBagConstraints.BOTH;
		gbc_panel_3.gridx = 0;
		gbc_panel_3.gridy = 7;
		panel.add(panel_3, gbc_panel_3);

		JButton btnCopy = new JButton("Copy");
		panel_3.add(btnCopy);

		JButton btnPaste = new JButton("Paste");
		panel_3.add(btnPaste);

		JPanel panel_4 = new JPanel();
		GridBagConstraints gbc_panel_4 = new GridBagConstraints();
		gbc_panel_4.insets = new Insets(0, 0, 0, 5);
		gbc_panel_4.gridx = 1;
		gbc_panel_4.gridy = 8;
		panel.add(panel_4, gbc_panel_4);
		panel_4.setBorder(new LineBorder(new Color(0, 0, 0)));
		panel_4.setForeground(SystemColor.desktop);
		panel_4.setBackground(Color.WHITE);
		panel_4.setLayout(new BorderLayout(0, 0));

		JPanel panel_1 = new JPanel();
		add(panel_1, BorderLayout.SOUTH);

		panelImage = new JPanel();
		add(panelImage, BorderLayout.CENTER);
		GridBagLayout gbl_panelImage = new GridBagLayout();
		gbl_panelImage.columnWidths = new int[] { 0, 0, 0 };
		gbl_panelImage.rowHeights = new int[] { 31, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0 };
		gbl_panelImage.columnWeights = new double[] { 1.0, 1.0,
				Double.MIN_VALUE };
		gbl_panelImage.rowWeights = new double[] { 0.0, 0.0, 0.0, 0.0, 0.0,
				0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0,
				Double.MIN_VALUE };
		panelImage.setLayout(gbl_panelImage);

		JPanel panel_7 = new JPanel();
		GridBagConstraints gbc_panel_7 = new GridBagConstraints();
		gbc_panel_7.gridwidth = 2;
		gbc_panel_7.insets = new Insets(0, 0, 5, 0);
		gbc_panel_7.fill = GridBagConstraints.BOTH;
		gbc_panel_7.gridx = 0;
		gbc_panel_7.gridy = 0;
		panelImage.add(panel_7, gbc_panel_7);
		GridBagLayout gbl_panel_7 = new GridBagLayout();
		gbl_panel_7.columnWidths = new int[] { 393, 0 };
		gbl_panel_7.rowHeights = new int[] { 25, 0, 0 };
		gbl_panel_7.columnWeights = new double[] { 1.0, Double.MIN_VALUE };
		gbl_panel_7.rowWeights = new double[] { 0.0, 0.0, Double.MIN_VALUE };
		panel_7.setLayout(gbl_panel_7);

		JPanel panel_6 = new JPanel();
		GridBagConstraints gbc_panel_6 = new GridBagConstraints();
		gbc_panel_6.insets = new Insets(0, 0, 5, 0);
		gbc_panel_6.anchor = GridBagConstraints.NORTH;
		gbc_panel_6.fill = GridBagConstraints.HORIZONTAL;
		gbc_panel_6.gridx = 0;
		gbc_panel_6.gridy = 0;
		panel_7.add(panel_6, gbc_panel_6);
		GridBagLayout gbl_panel_6 = new GridBagLayout();
		gbl_panel_6.columnWidths = new int[] { 95, 33, 25, 95, 27, 25, 0 };
		gbl_panel_6.rowHeights = new int[] { 5, 5, 0 };
		gbl_panel_6.columnWeights = new double[] { 0.0, 1.0, 0.0, 0.0, 1.0,
				0.0, Double.MIN_VALUE };
		gbl_panel_6.rowWeights = new double[] { 5.0, 0.0, Double.MIN_VALUE };
		panel_6.setLayout(gbl_panel_6);

		JLabel lblImageFolder = new JLabel("Image folder");
		GridBagConstraints gbc_lblImageFolder = new GridBagConstraints();
		gbc_lblImageFolder.insets = new Insets(0, 0, 0, 5);
		gbc_lblImageFolder.anchor = GridBagConstraints.EAST;
		gbc_lblImageFolder.gridx = 0;
		gbc_lblImageFolder.gridy = 1;
		panel_6.add(lblImageFolder, gbc_lblImageFolder);

		final JTextFieldReplace tfVariantImageFolder = new JTextFieldReplace();
		tfVariantImageFolder.setFindText(MessageFormat.format(
				"@VARIANT_{0}_IMAGE_FOLDER@", variantNumber));
		GridBagConstraints gbc_tfVariantImageFolder = new GridBagConstraints();
		gbc_tfVariantImageFolder.fill = GridBagConstraints.HORIZONTAL;
		gbc_tfVariantImageFolder.insets = new Insets(0, 0, 0, 5);
		gbc_tfVariantImageFolder.gridx = 1;
		gbc_tfVariantImageFolder.gridy = 1;
		panel_6.add(tfVariantImageFolder, gbc_tfVariantImageFolder);
		tfVariantImageFolder.setName(MessageFormat.format(
				"tfVariant{0}ImageFolder", variantNumber));

		JLabel lblImagePrefix = new JLabel("Image prefix");
		GridBagConstraints gbc_lblImagePrefix = new GridBagConstraints();
		gbc_lblImagePrefix.insets = new Insets(0, 0, 0, 5);
		gbc_lblImagePrefix.anchor = GridBagConstraints.EAST;
		gbc_lblImagePrefix.gridx = 3;
		gbc_lblImagePrefix.gridy = 1;
		panel_6.add(lblImagePrefix, gbc_lblImagePrefix);

		final JTextFieldReplace tfVariantImagePrefix = new JTextFieldReplace();
		tfVariantImagePrefix.setFindText(MessageFormat.format(
				"@VARIANT_{0}_IMAGE_NAME@", variantNumber));
		GridBagConstraints gbc_tfVariantImagePrefix = new GridBagConstraints();
		gbc_tfVariantImagePrefix.insets = new Insets(0, 0, 0, 5);
		gbc_tfVariantImagePrefix.fill = GridBagConstraints.HORIZONTAL;
		gbc_tfVariantImagePrefix.gridx = 4;
		gbc_tfVariantImagePrefix.gridy = 1;
		panel_6.add(tfVariantImagePrefix, gbc_tfVariantImagePrefix);
		tfVariantImagePrefix.setName(MessageFormat.format(
				"tfVariant{0}ImagePrefix", variantNumber));

		JPanel panel_5 = new JPanel();
		GridBagConstraints gbc_panel_5 = new GridBagConstraints();
		gbc_panel_5.gridx = 0;
		gbc_panel_5.gridy = 1;
		panel_7.add(panel_5, gbc_panel_5);

		btnVariantUpdateImage = new JButtonReplace("Update image");
		btnVariantUpdateImage.setLiteral(true);
		btnVariantUpdateImage.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent arg0) {
				btnVariantUpdateImage.setReplaceText(FileUtils.listFile(
						tfVariantImageFolder.getText(),
						MessageFormat.format("{0}.*",
								tfVariantImagePrefix.getText())));
				MessageUtils.getInstance().putValueChangeMessage(
						btnVariantUpdateImage);
			}
		});
		btnVariantUpdateImage.setName(MessageFormat.format(
				"btnVariant{0}UpdateImage", variantNumber));
		btnVariantUpdateImage.setFindText(MessageFormat.format(
				"@VARIANT_{0}_LIST_FILE@", variantNumber));
		panel_5.add(btnVariantUpdateImage);

		btnCopyImage = new JButton("Copy image");
		btnCopyImage.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				for (HasCopyFileScript copyFileScript : ComponentUtils
						.getAllComponents(panelImage, HasCopyFileScript.class)) {
					if (copyFileScript.getCopyFileScript() != null
							&& copyFileScript.getCopyFileScript().length > 0) {
						for (String[] script : copyFileScript
								.getCopyFileScript())
							try {
								FileUtils.copyFile(
										new File(script[0]),
										new File(GenerateUtils
												.replace(script[1])));
							} catch (IOException e1) {
								e1.printStackTrace();
							}
					}
				}
			}
		});
		btnCopyImage.setName("btnCopyImage");
		panel_5.add(btnCopyImage);

		image30Wx32H = new ImagePanel("30Wx32H", variantNumber);
		image30Wx32H.setName("image30Wx32H");
		image30Wx32H.setTextRuleScript(new String[] {
				"(?sm).*^(.*30x32\\.png)?$.*", "$1" });
		image30Wx32H.setTextRuleSource(MessageFormat.format(
				"@VARIANT_{0}_LIST_FILE@", variantNumber));
		image30Wx32H.setReference(new String[] { MessageFormat.format(
				"btnVariant{0}UpdateImage", variantNumber) });
		GridBagConstraints gbc_image30Wx32H = new GridBagConstraints();
		gbc_image30Wx32H.insets = new Insets(0, 0, 5, 5);
		gbc_image30Wx32H.fill = GridBagConstraints.HORIZONTAL;
		gbc_image30Wx32H.gridx = 0;
		gbc_image30Wx32H.gridy = 1;
		panelImage.add(image30Wx32H, gbc_image30Wx32H);

		image130Wx80H = new ImagePanel("130Wx80H", variantNumber);
		image130Wx80H.setTextRuleScript(new String[] {
				"(?sm).*^(.*130x80\\.png)?$.*", "$1" });
		image130Wx80H.setName("image130Wx80H");
		image130Wx80H.setTextRuleSource(MessageFormat.format(
				"@VARIANT_{0}_LIST_FILE@", variantNumber));
		image130Wx80H.setReference(new String[] { MessageFormat.format(
				"btnVariant{0}UpdateImage", variantNumber) });
		GridBagLayout gbl_image130Wx80H = (GridBagLayout) image130Wx80H
				.getLayout();
		gbl_image130Wx80H.rowWeights = new double[] { 0.0 };
		gbl_image130Wx80H.rowHeights = new int[] { 0 };
		GridBagConstraints gbc_image130Wx80H = new GridBagConstraints();
		gbc_image130Wx80H.insets = new Insets(0, 0, 5, 0);
		gbc_image130Wx80H.fill = GridBagConstraints.HORIZONTAL;
		gbc_image130Wx80H.gridx = 1;
		gbc_image130Wx80H.gridy = 1;
		panelImage.add(image130Wx80H, gbc_image130Wx80H);

		image125Wx90H = new ImagePanel("125Wx90H", variantNumber);
		image125Wx90H.setTextRuleScript(new String[] {
				"(?sm).*^(.*125x90\\.png)?$.*", "$1" });
		image125Wx90H.setName("image125Wx90H");
		image125Wx90H.setTextRuleSource(MessageFormat.format(
				"@VARIANT_{0}_LIST_FILE@", variantNumber));
		image125Wx90H.setReference(new String[] { MessageFormat.format(
				"btnVariant{0}UpdateImage", variantNumber) });
		GridBagConstraints gbc_image125Wx90H = new GridBagConstraints();
		gbc_image125Wx90H.insets = new Insets(0, 0, 5, 5);
		gbc_image125Wx90H.fill = GridBagConstraints.HORIZONTAL;
		gbc_image125Wx90H.gridx = 0;
		gbc_image125Wx90H.gridy = 2;
		panelImage.add(image125Wx90H, gbc_image125Wx90H);

		image138Wx80H = new ImagePanel("138Wx80H", variantNumber);
		image138Wx80H.setTextRuleScript(new String[] {
				"(?sm).*^(.*138x80\\.png)?$.*", "$1" });
		image138Wx80H.setName("image138Wx80H");
		image138Wx80H.setTextRuleSource(MessageFormat.format(
				"@VARIANT_{0}_LIST_FILE@", variantNumber));
		image138Wx80H.setReference(new String[] { MessageFormat.format(
				"btnVariant{0}UpdateImage", variantNumber) });
		GridBagLayout gbl_image138Wx80H = (GridBagLayout) image138Wx80H
				.getLayout();
		gbl_image138Wx80H.rowWeights = new double[] { 0.0 };
		gbl_image138Wx80H.rowHeights = new int[] { 0 };
		GridBagConstraints gbc_image138Wx80H = new GridBagConstraints();
		gbc_image138Wx80H.insets = new Insets(0, 0, 5, 0);
		gbc_image138Wx80H.fill = GridBagConstraints.HORIZONTAL;
		gbc_image138Wx80H.gridx = 1;
		gbc_image138Wx80H.gridy = 2;
		panelImage.add(image138Wx80H, gbc_image138Wx80H);

		image128Wx114H = new ImagePanel("128Wx114H", variantNumber);
		image128Wx114H.setTextRuleScript(new String[] {
				"(?sm).*^(.*128x114\\.png)?$.*", "$1" });
		image128Wx114H.setName("image128Wx114H");
		image128Wx114H.setTextRuleSource(MessageFormat.format(
				"@VARIANT_{0}_LIST_FILE@", variantNumber));
		image128Wx114H.setReference(new String[] { MessageFormat.format(
				"btnVariant{0}UpdateImage", variantNumber) });
		GridBagLayout gbl_image128Wx114H = (GridBagLayout) image128Wx114H
				.getLayout();
		gbl_image128Wx114H.rowWeights = new double[] { 0.0 };
		gbl_image128Wx114H.rowHeights = new int[] { 0 };
		GridBagConstraints gbc_image128Wx114H = new GridBagConstraints();
		gbc_image128Wx114H.insets = new Insets(0, 0, 5, 5);
		gbc_image128Wx114H.fill = GridBagConstraints.HORIZONTAL;
		gbc_image128Wx114H.gridx = 0;
		gbc_image128Wx114H.gridy = 3;
		panelImage.add(image128Wx114H, gbc_image128Wx114H);

		image220Wx120H = new ImagePanel("220Wx120H", variantNumber);
		image220Wx120H.setTextRuleScript(new String[] {
				"(?sm).*^(.*220x120\\.png)?$.*", "$1" });
		image220Wx120H.setName("image220Wx120H");
		image220Wx120H.setTextRuleSource(MessageFormat.format(
				"@VARIANT_{0}_LIST_FILE@", variantNumber));
		image220Wx120H.setReference(new String[] { MessageFormat.format(
				"btnVariant{0}UpdateImage", variantNumber) });
		GridBagLayout gbl_image220Wx120H = (GridBagLayout) image220Wx120H
				.getLayout();
		gbl_image220Wx120H.rowWeights = new double[] { 0.0 };
		gbl_image220Wx120H.rowHeights = new int[] { 0 };
		GridBagConstraints gbc_image220Wx120H = new GridBagConstraints();
		gbc_image220Wx120H.insets = new Insets(0, 0, 5, 0);
		gbc_image220Wx120H.fill = GridBagConstraints.HORIZONTAL;
		gbc_image220Wx120H.gridx = 1;
		gbc_image220Wx120H.gridy = 3;
		panelImage.add(image220Wx120H, gbc_image220Wx120H);

		image128Wx85H = new ImagePanel("128Wx85H", variantNumber);
		image128Wx85H.setTextRuleScript(new String[] {
				"(?sm).*^(.*128x85\\.png)?$.*", "$1" });
		image128Wx85H.setName("image128Wx85H");
		image128Wx85H.setTextRuleSource(MessageFormat.format(
				"@VARIANT_{0}_LIST_FILE@", variantNumber));
		image128Wx85H.setReference(new String[] { MessageFormat.format(
				"btnVariant{0}UpdateImage", variantNumber) });
		GridBagLayout gbl_image128Wx85H = (GridBagLayout) image128Wx85H
				.getLayout();
		gbl_image128Wx85H.rowWeights = new double[] { 0.0 };
		gbl_image128Wx85H.rowHeights = new int[] { 0 };
		GridBagConstraints gbc_image128Wx85H = new GridBagConstraints();
		gbc_image128Wx85H.insets = new Insets(0, 0, 5, 5);
		gbc_image128Wx85H.fill = GridBagConstraints.HORIZONTAL;
		gbc_image128Wx85H.gridx = 0;
		gbc_image128Wx85H.gridy = 4;
		panelImage.add(image128Wx85H, gbc_image128Wx85H);

		image164Wx115H = new ImagePanel("164Wx115H", variantNumber);
		image164Wx115H.setTextRuleScript(new String[] {
				"(?sm).*^(.*164x115\\.png)?$.*", "$1" });
		image164Wx115H.setName("image164Wx115H");
		image164Wx115H.setTextRuleSource(MessageFormat.format(
				"@VARIANT_{0}_LIST_FILE@", variantNumber));
		image164Wx115H.setReference(new String[] { MessageFormat.format(
				"btnVariant{0}UpdateImage", variantNumber) });
		GridBagLayout gbl_image164Wx115H = (GridBagLayout) image164Wx115H
				.getLayout();
		gbl_image164Wx115H.rowWeights = new double[] { 0.0 };
		gbl_image164Wx115H.rowHeights = new int[] { 0 };
		GridBagConstraints gbc_image164Wx115H = new GridBagConstraints();
		gbc_image164Wx115H.insets = new Insets(0, 0, 5, 0);
		gbc_image164Wx115H.fill = GridBagConstraints.HORIZONTAL;
		gbc_image164Wx115H.gridx = 1;
		gbc_image164Wx115H.gridy = 4;
		panelImage.add(image164Wx115H, gbc_image164Wx115H);

		image130Wx130H = new ImagePanel("130Wx130H", variantNumber);
		image130Wx130H.setTextRuleScript(new String[] {
				"(?sm).*^(.*130x130\\.png)?$.*", "$1" });
		image130Wx130H.setName("image130Wx130H");
		image130Wx130H.setTextRuleSource(MessageFormat.format(
				"@VARIANT_{0}_LIST_FILE@", variantNumber));
		image130Wx130H.setReference(new String[] { MessageFormat.format(
				"btnVariant{0}UpdateImage", variantNumber) });
		GridBagLayout gbl_image130Wx130H = (GridBagLayout) image130Wx130H
				.getLayout();
		gbl_image130Wx130H.rowWeights = new double[] { 0.0 };
		gbl_image130Wx130H.rowHeights = new int[] { 0 };
		GridBagConstraints gbc_image130Wx130H = new GridBagConstraints();
		gbc_image130Wx130H.insets = new Insets(0, 0, 5, 5);
		gbc_image130Wx130H.fill = GridBagConstraints.HORIZONTAL;
		gbc_image130Wx130H.gridx = 0;
		gbc_image130Wx130H.gridy = 5;
		panelImage.add(image130Wx130H, gbc_image130Wx130H);

		image300Wx180H = new ImagePanel("300Wx180H", variantNumber);
		image300Wx180H.setTextRuleScript(new String[] {
				"(?sm).*^(.*300x180\\.png)?$.*", "$1" });
		image300Wx180H.setName("image300Wx180H");
		image300Wx180H.setTextRuleSource(MessageFormat.format(
				"@VARIANT_{0}_LIST_FILE@", variantNumber));
		image300Wx180H.setReference(new String[] { MessageFormat.format(
				"btnVariant{0}UpdateImage", variantNumber) });
		GridBagLayout gbl_image300Wx180H = (GridBagLayout) image300Wx180H
				.getLayout();
		gbl_image300Wx180H.rowWeights = new double[] { 0.0 };
		gbl_image300Wx180H.rowHeights = new int[] { 0 };
		GridBagConstraints gbc_image300Wx180H = new GridBagConstraints();
		gbc_image300Wx180H.insets = new Insets(0, 0, 5, 0);
		gbc_image300Wx180H.fill = GridBagConstraints.HORIZONTAL;
		gbc_image300Wx180H.gridx = 1;
		gbc_image300Wx180H.gridy = 5;
		panelImage.add(image300Wx180H, gbc_image300Wx180H);

		image96Wx96H_1 = new ImagePanel("96Wx96H_1", variantNumber);
		image96Wx96H_1.setTextRuleScript(new String[] {
				"(?sm).*^(.*(?:104x104|104x104_1)\\.png)?$.*", "$1" });
		image96Wx96H_1.setName("image96Wx96H_1");
		image96Wx96H_1.setTextRuleSource(MessageFormat.format(
				"@VARIANT_{0}_LIST_FILE@", variantNumber));
		image96Wx96H_1.setReference(new String[] { MessageFormat.format(
				"btnVariant{0}UpdateImage", variantNumber) });
		GridBagLayout gbl_image96Wx96H_1 = (GridBagLayout) image96Wx96H_1
				.getLayout();
		gbl_image96Wx96H_1.rowWeights = new double[] { 0.0 };
		gbl_image96Wx96H_1.rowHeights = new int[] { 0 };
		GridBagConstraints gbc_image96Wx96H_1 = new GridBagConstraints();
		gbc_image96Wx96H_1.insets = new Insets(0, 0, 5, 5);
		gbc_image96Wx96H_1.fill = GridBagConstraints.HORIZONTAL;
		gbc_image96Wx96H_1.gridx = 0;
		gbc_image96Wx96H_1.gridy = 6;
		panelImage.add(image96Wx96H_1, gbc_image96Wx96H_1);

		image300Wx300H_1 = new ImagePanel("300Wx300H_1", variantNumber);
		image300Wx300H_1
				.setTextRuleScript(new String[] {
						"(?sm).*^(.*(?:480x316|359x485|300x465|392x343|472x263|290x283)(?:_1)?\\.png)?$.*",
						"$1" });
		image300Wx300H_1.setName("image300Wx300H_1");
		image300Wx300H_1.setTextRuleSource(MessageFormat.format(
				"@VARIANT_{0}_LIST_FILE@", variantNumber));
		image300Wx300H_1.setReference(new String[] { MessageFormat.format(
				"btnVariant{0}UpdateImage", variantNumber) });
		GridBagLayout gbl_image300Wx300H_1 = (GridBagLayout) image300Wx300H_1
				.getLayout();
		gbl_image300Wx300H_1.rowWeights = new double[] { 0.0 };
		gbl_image300Wx300H_1.rowHeights = new int[] { 0 };
		GridBagConstraints gbc_image300Wx300H_1 = new GridBagConstraints();
		gbc_image300Wx300H_1.insets = new Insets(0, 0, 5, 0);
		gbc_image300Wx300H_1.fill = GridBagConstraints.HORIZONTAL;
		gbc_image300Wx300H_1.gridx = 1;
		gbc_image300Wx300H_1.gridy = 6;
		panelImage.add(image300Wx300H_1, gbc_image300Wx300H_1);

		image96Wx96H_2 = new ImagePanel("96Wx96H_2", variantNumber);
		image96Wx96H_2.setTextRuleScript(new String[] {
				"(?sm).*^(.*(?:104x104_2)\\.png)?$.*", "$1" });
		image96Wx96H_2.setName("image96Wx96H_2");
		image96Wx96H_2.setTextRuleSource(MessageFormat.format(
				"@VARIANT_{0}_LIST_FILE@", variantNumber));
		image96Wx96H_2.setReference(new String[] { MessageFormat.format(
				"btnVariant{0}UpdateImage", variantNumber) });
		GridBagLayout gbl_image96Wx96H_2 = (GridBagLayout) image96Wx96H_2
				.getLayout();
		gbl_image96Wx96H_2.rowWeights = new double[] { 0.0 };
		gbl_image96Wx96H_2.rowHeights = new int[] { 0 };
		GridBagConstraints gbc_image96Wx96H_2 = new GridBagConstraints();
		gbc_image96Wx96H_2.insets = new Insets(0, 0, 5, 5);
		gbc_image96Wx96H_2.fill = GridBagConstraints.HORIZONTAL;
		gbc_image96Wx96H_2.gridx = 0;
		gbc_image96Wx96H_2.gridy = 7;
		panelImage.add(image96Wx96H_2, gbc_image96Wx96H_2);

		image300Wx300H_2 = new ImagePanel("300Wx300H_2", variantNumber);
		image300Wx300H_2
				.setTextRuleScript(new String[] {
						"(?sm).*^(.*(?:480x316|359x485|300x465|392x343|472x263|290x283)_2\\.png)?$.*",
						"$1" });
		image300Wx300H_2.setName("image300Wx300H_2");
		image300Wx300H_2.setTextRuleSource(MessageFormat.format(
				"@VARIANT_{0}_LIST_FILE@", variantNumber));
		image300Wx300H_2.setReference(new String[] { MessageFormat.format(
				"btnVariant{0}UpdateImage", variantNumber) });
		GridBagLayout gbl_image300Wx300H_2 = (GridBagLayout) image300Wx300H_2
				.getLayout();
		gbl_image300Wx300H_2.rowWeights = new double[] { 0.0 };
		gbl_image300Wx300H_2.rowHeights = new int[] { 0 };
		GridBagConstraints gbc_image300Wx300H_2 = new GridBagConstraints();
		gbc_image300Wx300H_2.insets = new Insets(0, 0, 5, 0);
		gbc_image300Wx300H_2.fill = GridBagConstraints.HORIZONTAL;
		gbc_image300Wx300H_2.gridx = 1;
		gbc_image300Wx300H_2.gridy = 7;
		panelImage.add(image300Wx300H_2, gbc_image300Wx300H_2);

		image96Wx96H_3 = new ImagePanel("96Wx96H_3", variantNumber);
		image96Wx96H_3.setTextRuleScript(new String[] {
				"(?sm).*^(.*(?:104x104_3)\\.png)?$.*", "$1" });
		image96Wx96H_3.setName("image96Wx96H_3");
		image96Wx96H_3.setTextRuleSource(MessageFormat.format(
				"@VARIANT_{0}_LIST_FILE@", variantNumber));
		image96Wx96H_3.setReference(new String[] { MessageFormat.format(
				"btnVariant{0}UpdateImage", variantNumber) });
		GridBagLayout gbl_image96Wx96H_3 = (GridBagLayout) image96Wx96H_3
				.getLayout();
		gbl_image96Wx96H_3.rowWeights = new double[] { 0.0 };
		gbl_image96Wx96H_3.rowHeights = new int[] { 0 };
		GridBagConstraints gbc_image96Wx96H_3 = new GridBagConstraints();
		gbc_image96Wx96H_3.insets = new Insets(0, 0, 5, 5);
		gbc_image96Wx96H_3.fill = GridBagConstraints.HORIZONTAL;
		gbc_image96Wx96H_3.gridx = 0;
		gbc_image96Wx96H_3.gridy = 8;
		panelImage.add(image96Wx96H_3, gbc_image96Wx96H_3);

		image300Wx300H_3 = new ImagePanel("300Wx300H_3", variantNumber);
		image300Wx300H_3
				.setTextRuleScript(new String[] {
						"(?sm).*^(.*(?:480x316|359x485|300x465|392x343|472x263|290x283)_3\\.png)?$.*",
						"$1" });
		image300Wx300H_3.setName("image300Wx300H_3");
		image300Wx300H_3.setTextRuleSource(MessageFormat.format(
				"@VARIANT_{0}_LIST_FILE@", variantNumber));
		image300Wx300H_3.setReference(new String[] { MessageFormat.format(
				"btnVariant{0}UpdateImage", variantNumber) });
		GridBagLayout gbl_image300Wx300H_3 = (GridBagLayout) image300Wx300H_3
				.getLayout();
		gbl_image300Wx300H_3.rowWeights = new double[] { 0.0 };
		gbl_image300Wx300H_3.rowHeights = new int[] { 0 };
		GridBagConstraints gbc_image300Wx300H_3 = new GridBagConstraints();
		gbc_image300Wx300H_3.insets = new Insets(0, 0, 5, 0);
		gbc_image300Wx300H_3.fill = GridBagConstraints.HORIZONTAL;
		gbc_image300Wx300H_3.gridx = 1;
		gbc_image300Wx300H_3.gridy = 8;
		panelImage.add(image300Wx300H_3, gbc_image300Wx300H_3);

		image96Wx96H_4 = new ImagePanel("96Wx96H_4", 0);
		GridBagLayout gbl_image96Wx96H_4 = (GridBagLayout) image96Wx96H_4
				.getLayout();
		gbl_image96Wx96H_4.rowWeights = new double[] { 0.0 };
		gbl_image96Wx96H_4.rowHeights = new int[] { 0 };
		gbl_image96Wx96H_4.columnWeights = new double[] { 0.0, 12.0, 0.0, 0.0 };
		gbl_image96Wx96H_4.columnWidths = new int[] { 95, 0, 83, 0 };
		image96Wx96H_4.setTextRuleSource(MessageFormat.format("@VARIANT_{0}_LIST_FILE@", variantNumber));
		image96Wx96H_4.setTextRuleScript(new String[] {
				"(?sm).*^(.*(?:104x104_4)\\.png)?$.*", "$1" });
		image96Wx96H_4.setReference(new String[] { "btnVariant0UpdateImage" });
		image96Wx96H_4.setName("image96Wx96H_4");
		GridBagConstraints gbc_image96Wx96H_4 = new GridBagConstraints();
		gbc_image96Wx96H_4.insets = new Insets(0, 0, 5, 5);
		gbc_image96Wx96H_4.fill = GridBagConstraints.BOTH;
		gbc_image96Wx96H_4.gridx = 0;
		gbc_image96Wx96H_4.gridy = 9;
		panelImage.add(image96Wx96H_4, gbc_image96Wx96H_4);

		image300Wx300H_4 = new ImagePanel("300Wx300H_4", 0);
		GridBagLayout gbl_image300Wx300H_4 = (GridBagLayout) image300Wx300H_4
				.getLayout();
		gbl_image300Wx300H_4.rowWeights = new double[] { 0.0 };
		gbl_image300Wx300H_4.rowHeights = new int[] { 0 };
		gbl_image300Wx300H_4.columnWeights = new double[] { 0.0, 12.0, 0.0, 0.0 };
		gbl_image300Wx300H_4.columnWidths = new int[] { 95, 0, 83, 0 };
		image300Wx300H_4.setTextRuleSource(MessageFormat.format("@VARIANT_{0}_LIST_FILE@", variantNumber));
		image300Wx300H_4
				.setTextRuleScript(new String[] {
						"(?sm).*^(.*(?:480x316|359x485|300x465|392x343|472x263|290x283)_4\\.png)?$.*",
						"$1" });
		image300Wx300H_4
				.setReference(new String[] { "btnVariant0UpdateImage" });
		image300Wx300H_4.setName("image300Wx300H_4");
		GridBagConstraints gbc_image300Wx300H_4 = new GridBagConstraints();
		gbc_image300Wx300H_4.insets = new Insets(0, 0, 5, 0);
		gbc_image300Wx300H_4.fill = GridBagConstraints.HORIZONTAL;
		gbc_image300Wx300H_4.gridx = 1;
		gbc_image300Wx300H_4.gridy = 9;
		panelImage.add(image300Wx300H_4, gbc_image300Wx300H_4);

		image96Wx96H_5 = new ImagePanel("96Wx96H_5", 0);
		GridBagLayout gbl_image96Wx96H_5 = (GridBagLayout) image96Wx96H_5
				.getLayout();
		gbl_image96Wx96H_5.rowWeights = new double[] { 0.0 };
		gbl_image96Wx96H_5.rowHeights = new int[] { 0 };
		gbl_image96Wx96H_5.columnWeights = new double[] { 0.0, 12.0, 0.0, 0.0 };
		gbl_image96Wx96H_5.columnWidths = new int[] { 95, 0, 83, 0 };
		image96Wx96H_5.setTextRuleSource(MessageFormat.format("@VARIANT_{0}_LIST_FILE@", variantNumber));
		image96Wx96H_5.setTextRuleScript(new String[] {
				"(?sm).*^(.*(?:104x104_5)\\.png)?$.*", "$1" });
		image96Wx96H_5.setReference(new String[] { "btnVariant0UpdateImage" });
		image96Wx96H_5.setName("image96Wx96H_5");
		GridBagConstraints gbc_image96Wx96H_5 = new GridBagConstraints();
		gbc_image96Wx96H_5.insets = new Insets(0, 0, 5, 5);
		gbc_image96Wx96H_5.fill = GridBagConstraints.BOTH;
		gbc_image96Wx96H_5.gridx = 0;
		gbc_image96Wx96H_5.gridy = 10;
		panelImage.add(image96Wx96H_5, gbc_image96Wx96H_5);

		image300Wx300H_5 = new ImagePanel("300Wx300H_5", 0);
		GridBagLayout gbl_image300Wx300H_5 = (GridBagLayout) image300Wx300H_5
				.getLayout();
		gbl_image300Wx300H_5.rowWeights = new double[] { 0.0 };
		gbl_image300Wx300H_5.rowHeights = new int[] { 0 };
		gbl_image300Wx300H_5.columnWeights = new double[] { 0.0, 12.0, 0.0, 0.0 };
		gbl_image300Wx300H_5.columnWidths = new int[] { 95, 0, 83, 0 };
		image300Wx300H_5.setTextRuleSource(MessageFormat.format("@VARIANT_{0}_LIST_FILE@", variantNumber));
		image300Wx300H_5
				.setTextRuleScript(new String[] {
						"(?sm).*^(.*(?:480x316|359x485|300x465|392x343|472x263|290x283)_5\\.png)?$.*",
						"$1" });
		image300Wx300H_5
				.setReference(new String[] { "btnVariant0UpdateImage" });
		image300Wx300H_5.setName("image300Wx300H_5");
		GridBagConstraints gbc_image300Wx300H_5 = new GridBagConstraints();
		gbc_image300Wx300H_5.insets = new Insets(0, 0, 5, 0);
		gbc_image300Wx300H_5.fill = GridBagConstraints.BOTH;
		gbc_image300Wx300H_5.gridx = 1;
		gbc_image300Wx300H_5.gridy = 10;
		panelImage.add(image300Wx300H_5, gbc_image300Wx300H_5);

		image96Wx96H_6 = new ImagePanel("96Wx96H_6", 0);
		GridBagLayout gbl_image96Wx96H_6 = (GridBagLayout) image96Wx96H_6
				.getLayout();
		gbl_image96Wx96H_6.rowWeights = new double[] { 0.0 };
		gbl_image96Wx96H_6.rowHeights = new int[] { 0 };
		gbl_image96Wx96H_6.columnWeights = new double[] { 0.0, 12.0, 0.0, 0.0 };
		gbl_image96Wx96H_6.columnWidths = new int[] { 95, 0, 83, 0 };
		image96Wx96H_6.setTextRuleSource(MessageFormat.format("@VARIANT_{0}_LIST_FILE@", variantNumber));
		image96Wx96H_6.setTextRuleScript(new String[] {
				"(?sm).*^(.*(?:104x104_6)\\.png)?$.*", "$1" });
		image96Wx96H_6.setReference(new String[] { "btnVariant0UpdateImage" });
		image96Wx96H_6.setName("image96Wx96H_6");
		GridBagConstraints gbc_image96Wx96H_6 = new GridBagConstraints();
		gbc_image96Wx96H_6.insets = new Insets(0, 0, 5, 5);
		gbc_image96Wx96H_6.fill = GridBagConstraints.BOTH;
		gbc_image96Wx96H_6.gridx = 0;
		gbc_image96Wx96H_6.gridy = 11;
		panelImage.add(image96Wx96H_6, gbc_image96Wx96H_6);

		image300Wx300H_6 = new ImagePanel("300Wx300H_6", 0);
		GridBagLayout gbl_image300Wx300H_6 = (GridBagLayout) image300Wx300H_6
				.getLayout();
		gbl_image300Wx300H_6.rowWeights = new double[] { 0.0 };
		gbl_image300Wx300H_6.rowHeights = new int[] { 0 };
		gbl_image300Wx300H_6.columnWeights = new double[] { 0.0, 12.0, 0.0, 0.0 };
		gbl_image300Wx300H_6.columnWidths = new int[] { 95, 0, 83, 0 };
		image300Wx300H_6.setTextRuleSource(MessageFormat.format("@VARIANT_{0}_LIST_FILE@", variantNumber));
		image300Wx300H_6
				.setTextRuleScript(new String[] {
						"(?sm).*^(.*(?:480x316|359x485|300x465|392x343|472x263|290x283)_6\\.png)?$.*",
						"$1" });
		image300Wx300H_6
				.setReference(new String[] { "btnVariant0UpdateImage" });
		image300Wx300H_6.setName("image300Wx300H_6");
		GridBagConstraints gbc_image300Wx300H_6 = new GridBagConstraints();
		gbc_image300Wx300H_6.insets = new Insets(0, 0, 5, 0);
		gbc_image300Wx300H_6.fill = GridBagConstraints.BOTH;
		gbc_image300Wx300H_6.gridx = 1;
		gbc_image300Wx300H_6.gridy = 11;
		panelImage.add(image300Wx300H_6, gbc_image300Wx300H_6);

		image96Wx96H_7 = new ImagePanel("96Wx96H_7", 0);
		GridBagLayout gbl_image96Wx96H_7 = (GridBagLayout) image96Wx96H_7
				.getLayout();
		gbl_image96Wx96H_7.rowWeights = new double[] { 0.0 };
		gbl_image96Wx96H_7.rowHeights = new int[] { 0 };
		gbl_image96Wx96H_7.columnWeights = new double[] { 0.0, 12.0, 0.0, 0.0 };
		gbl_image96Wx96H_7.columnWidths = new int[] { 95, 0, 83, 0 };
		image96Wx96H_7.setTextRuleSource(MessageFormat.format("@VARIANT_{0}_LIST_FILE@", variantNumber));
		image96Wx96H_7.setTextRuleScript(new String[] {
				"(?sm).*^(.*(?:104x104_7)\\.png)?$.*", "$1" });
		image96Wx96H_7.setReference(new String[] { "btnVariant0UpdateImage" });
		image96Wx96H_7.setName("image96Wx96H_7");
		GridBagConstraints gbc_image96Wx96H_7 = new GridBagConstraints();
		gbc_image96Wx96H_7.insets = new Insets(0, 0, 5, 5);
		gbc_image96Wx96H_7.fill = GridBagConstraints.BOTH;
		gbc_image96Wx96H_7.gridx = 0;
		gbc_image96Wx96H_7.gridy = 12;
		panelImage.add(image96Wx96H_7, gbc_image96Wx96H_7);

		image300Wx300H_7 = new ImagePanel("300Wx300H_7", 0);
		GridBagLayout gbl_image300Wx300H_7 = (GridBagLayout) image300Wx300H_7
				.getLayout();
		gbl_image300Wx300H_7.rowWeights = new double[] { 0.0 };
		gbl_image300Wx300H_7.rowHeights = new int[] { 0 };
		gbl_image300Wx300H_7.columnWeights = new double[] { 0.0, 12.0, 0.0, 0.0 };
		gbl_image300Wx300H_7.columnWidths = new int[] { 95, 0, 83, 0 };
		image300Wx300H_7.setTextRuleSource(MessageFormat.format("@VARIANT_{0}_LIST_FILE@", variantNumber));
		image300Wx300H_7
				.setTextRuleScript(new String[] {
						"(?sm).*^(.*(?:480x316|359x485|300x465|392x343|472x263|290x283)_7\\.png)?$.*",
						"$1" });
		image300Wx300H_7
				.setReference(new String[] { "btnVariant0UpdateImage" });
		image300Wx300H_7.setName("image300Wx300H_7");
		GridBagConstraints gbc_image300Wx300H_7 = new GridBagConstraints();
		gbc_image300Wx300H_7.insets = new Insets(0, 0, 5, 0);
		gbc_image300Wx300H_7.fill = GridBagConstraints.BOTH;
		gbc_image300Wx300H_7.gridx = 1;
		gbc_image300Wx300H_7.gridy = 12;
		panelImage.add(image300Wx300H_7, gbc_image300Wx300H_7);

		image96Wx96H_8 = new ImagePanel("96Wx96H_8", 0);
		GridBagLayout gbl_image96Wx96H_8 = (GridBagLayout) image96Wx96H_8
				.getLayout();
		gbl_image96Wx96H_8.rowWeights = new double[] { 0.0 };
		gbl_image96Wx96H_8.rowHeights = new int[] { 0 };
		gbl_image96Wx96H_8.columnWeights = new double[] { 0.0, 12.0, 0.0, 0.0 };
		gbl_image96Wx96H_8.columnWidths = new int[] { 95, 0, 83, 0 };
		image96Wx96H_8.setTextRuleSource(MessageFormat.format("@VARIANT_{0}_LIST_FILE@", variantNumber));
		image96Wx96H_8.setTextRuleScript(new String[] {
				"(?sm).*^(.*(?:104x104_8)\\.png)?$.*", "$1" });
		image96Wx96H_8.setReference(new String[] { "btnVariant0UpdateImage" });
		image96Wx96H_8.setName("image96Wx96H_8");
		GridBagConstraints gbc_image96Wx96H_8 = new GridBagConstraints();
		gbc_image96Wx96H_8.insets = new Insets(0, 0, 5, 5);
		gbc_image96Wx96H_8.fill = GridBagConstraints.BOTH;
		gbc_image96Wx96H_8.gridx = 0;
		gbc_image96Wx96H_8.gridy = 13;
		panelImage.add(image96Wx96H_8, gbc_image96Wx96H_8);

		image300Wx300H_8 = new ImagePanel("300Wx300H_8", 0);
		GridBagLayout gbl_image300Wx300H_8 = (GridBagLayout) image300Wx300H_8
				.getLayout();
		gbl_image300Wx300H_8.rowWeights = new double[] { 0.0 };
		gbl_image300Wx300H_8.rowHeights = new int[] { 0 };
		gbl_image300Wx300H_8.columnWeights = new double[] { 0.0, 12.0, 0.0, 0.0 };
		gbl_image300Wx300H_8.columnWidths = new int[] { 95, 0, 83, 0 };
		image300Wx300H_8.setTextRuleSource(MessageFormat.format("@VARIANT_{0}_LIST_FILE@", variantNumber));
		image300Wx300H_8
				.setTextRuleScript(new String[] {
						"(?sm).*^(.*(?:480x316|359x485|300x465|392x343|472x263|290x283)_8\\.png)?$.*",
						"$1" });
		image300Wx300H_8
				.setReference(new String[] { "btnVariant0UpdateImage" });
		image300Wx300H_8.setName("image300Wx300H_8");
		GridBagConstraints gbc_image300Wx300H_8 = new GridBagConstraints();
		gbc_image300Wx300H_8.insets = new Insets(0, 0, 5, 0);
		gbc_image300Wx300H_8.fill = GridBagConstraints.BOTH;
		gbc_image300Wx300H_8.gridx = 1;
		gbc_image300Wx300H_8.gridy = 13;
		panelImage.add(image300Wx300H_8, gbc_image300Wx300H_8);
	}

	@Override
	public void putMessage(Message message) {
		if (message.getMessageType().equals(MessageType.ReferenceValueChange)) {
			boolean isVisiable = GenerateUtils.replace(getTextVisiableRule()) != null
					&& GenerateUtils.replace(getTextVisiableRule()).length() > 0;
			if (getParent() instanceof JTabbedPane) {
				((JTabbedPane) getParent()).setEnabledAt(
						((JTabbedPane) getParent()).indexOfComponent(this),
						isVisiable);
			}
		}
	}

	@Override
	public String getTextRuleSource() {
		return null;
	}

	@Override
	public void setTextRuleSource(String source) {
	}

	@Override
	public String[] getTextRuleScript() {
		return null;
	}

	@Override
	public void setTextRuleScript(String[] textRuleScript) {
	}

	@Override
	public void setReference(String[] reference) {
		this.reference = reference;
		MessageUtils.getInstance().putReferenceChange(this);
	}

	@Override
	public String[] getReference() {
		return this.reference;
	}

	@Override
	public String getTextVisiableRule() {
		return this.textVisiableRule;
	}

	@Override
	public void setTextVisiableRule(String textVisitableRule) {
		this.textVisiableRule = textVisitableRule;
	}

}
