package generate.form;

import generate.control.impls.JComboboxNumberFlagReplace;
import generate.control.impls.JComboboxReplace;
import generate.control.impls.JTextAreaReplace;
import generate.control.impls.JTextFieldMultiSelectReplace;
import generate.control.impls.JTextFieldReplace;
import generate.core.GenerateUtils;

import java.awt.BorderLayout;
import java.awt.GridBagConstraints;
import java.awt.GridBagLayout;
import java.awt.Insets;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.IOException;
import java.text.MessageFormat;

import javax.swing.DefaultComboBoxModel;
import javax.swing.JButton;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JScrollPane;

public class BaseProductPanel extends JPanel {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public BaseProductPanel() {
		setLayout(new BorderLayout(0, 0));

		JPanel panel_1 = new JPanel();
		add(panel_1, BorderLayout.CENTER);
		GridBagLayout gbl_panel_1 = new GridBagLayout();
		gbl_panel_1.columnWidths = new int[] { 0, 0, 0 };
		gbl_panel_1.rowHeights = new int[] { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
		gbl_panel_1.columnWeights = new double[] { 0.0, 1.0, Double.MIN_VALUE };
		gbl_panel_1.rowWeights = new double[] { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
				0.0, 0.0, 0.0, 0.0, 0.0, 1.0 };
		panel_1.setLayout(gbl_panel_1);

		JLabel lblElectronicscolorvariantproducttype = new JLabel(
				"Electronics color variant product type");
		GridBagConstraints gbc_lblElectronicscolorvariantproducttype = new GridBagConstraints();
		gbc_lblElectronicscolorvariantproducttype.insets = new Insets(0, 0, 5,
				5);
		gbc_lblElectronicscolorvariantproducttype.anchor = GridBagConstraints.EAST;
		gbc_lblElectronicscolorvariantproducttype.gridx = 0;
		gbc_lblElectronicscolorvariantproducttype.gridy = 0;
		panel_1.add(lblElectronicscolorvariantproducttype,
				gbc_lblElectronicscolorvariantproducttype);

		JComboboxReplace cbbElectonicVariantProductType = new JComboboxReplace();
		cbbElectonicVariantProductType
				.setName("cbbElectonicVariantProductType");
		cbbElectonicVariantProductType
				.setFindText("@ELECTRONICS_COLOR_VARIANT_PRODUCT_TYPE@");
		cbbElectonicVariantProductType
				.setModel(new DefaultComboBoxModel<String>(new String[] {
						"ACCESSORY", "COMPUTER", "OFFICE", "SOFTWARE",
						"SURFACE", "SURFACE_2", "SURFACE_CN_2", "WINDOWPHONE",
						"WINDOWS", "WINDOWS_8", "GENERAL_PRODUCT" }));
		GridBagConstraints gbc_cbbVariantProductType = new GridBagConstraints();
		gbc_cbbVariantProductType.insets = new Insets(0, 0, 5, 0);
		gbc_cbbVariantProductType.fill = GridBagConstraints.HORIZONTAL;
		gbc_cbbVariantProductType.gridx = 1;
		gbc_cbbVariantProductType.gridy = 0;
		panel_1.add(cbbElectonicVariantProductType, gbc_cbbVariantProductType);

		JLabel lblSuperCategory = new JLabel("Super category");
		GridBagConstraints gbc_lblSuperCategory = new GridBagConstraints();
		gbc_lblSuperCategory.anchor = GridBagConstraints.EAST;
		gbc_lblSuperCategory.insets = new Insets(0, 0, 5, 5);
		gbc_lblSuperCategory.gridx = 0;
		gbc_lblSuperCategory.gridy = 1;
		panel_1.add(lblSuperCategory, gbc_lblSuperCategory);

		JTextFieldMultiSelectReplace tfSuperCategory = new JTextFieldMultiSelectReplace();
		tfSuperCategory.setName("tfSuperCategory");
		tfSuperCategory.setModel(new String[] { "accessories", "special_offer",
				"computer", "surface", "phone", "webcam",
				"surface_accessories", "window_phone", "office",
				"office_product", "laptop", "tablet", "external-product" });
		tfSuperCategory.setEditable(false);
		tfSuperCategory.setFindText("@SUPER_CATEGORIES@");
		GridBagConstraints gbc_tfSuperCategory = new GridBagConstraints();
		gbc_tfSuperCategory.insets = new Insets(0, 0, 5, 0);
		gbc_tfSuperCategory.fill = GridBagConstraints.HORIZONTAL;
		gbc_tfSuperCategory.gridx = 1;
		gbc_tfSuperCategory.gridy = 1;
		panel_1.add(tfSuperCategory, gbc_tfSuperCategory);

		JLabel lblSaleStatus = new JLabel("Sale status");
		GridBagConstraints gbc_lblSaleStatus = new GridBagConstraints();
		gbc_lblSaleStatus.insets = new Insets(0, 0, 5, 5);
		gbc_lblSaleStatus.anchor = GridBagConstraints.EAST;
		gbc_lblSaleStatus.gridx = 0;
		gbc_lblSaleStatus.gridy = 2;
		panel_1.add(lblSaleStatus, gbc_lblSaleStatus);

		JComboboxReplace cbbSaleStatus = new JComboboxReplace();
		cbbSaleStatus.setName("cbbSaleStatus");
		cbbSaleStatus.setFindText("@SALE_STATUS@");
		cbbSaleStatus.setModel(new DefaultComboBoxModel<String>(new String[] {
				"FOR_SALE", "MARKETING", "COMMING_SOON", "PREORDER" }));
		GridBagConstraints gbc_cbbSaleStatus = new GridBagConstraints();
		gbc_cbbSaleStatus.insets = new Insets(0, 0, 5, 0);
		gbc_cbbSaleStatus.fill = GridBagConstraints.HORIZONTAL;
		gbc_cbbSaleStatus.gridx = 1;
		gbc_cbbSaleStatus.gridy = 2;
		panel_1.add(cbbSaleStatus, gbc_cbbSaleStatus);

		JLabel lblVariantType = new JLabel("Variant type");
		GridBagConstraints gbc_lblVariantType = new GridBagConstraints();
		gbc_lblVariantType.insets = new Insets(0, 0, 5, 5);
		gbc_lblVariantType.anchor = GridBagConstraints.EAST;
		gbc_lblVariantType.gridx = 0;
		gbc_lblVariantType.gridy = 3;
		panel_1.add(lblVariantType, gbc_lblVariantType);

		JComboboxReplace cbbVariantType = new JComboboxReplace();
		cbbVariantType.setName("cbbVariantType");
		cbbVariantType.setFindText("@VARIANT_TYPE@");
		cbbVariantType.setModel(new DefaultComboBoxModel<String>(new String[] {
				"ElectronicsColorVariantProduct", "ApparelSizeVariantProduct",
				"ApparelStyleVariantProduct", "VariantProduct",
				"VersionVariantProduct" }));
		GridBagConstraints gbc_cbbVariantType = new GridBagConstraints();
		gbc_cbbVariantType.insets = new Insets(0, 0, 5, 0);
		gbc_cbbVariantType.fill = GridBagConstraints.HORIZONTAL;
		gbc_cbbVariantType.gridx = 1;
		gbc_cbbVariantType.gridy = 3;
		panel_1.add(cbbVariantType, gbc_cbbVariantType);

		JLabel lblProductType = new JLabel("Product type");
		GridBagConstraints gbc_lblProductType = new GridBagConstraints();
		gbc_lblProductType.insets = new Insets(0, 0, 5, 5);
		gbc_lblProductType.anchor = GridBagConstraints.EAST;
		gbc_lblProductType.gridx = 0;
		gbc_lblProductType.gridy = 4;
		panel_1.add(lblProductType, gbc_lblProductType);

		JComboboxReplace cbbProductType = new JComboboxReplace();
		cbbProductType.setName("cbbProductType");
		cbbProductType.setFindText("@PRODUCT_TYPE@");
		cbbProductType.setModel(new DefaultComboBoxModel<String>(new String[] {
				"ACCESSORY", "COMPUTER", "OFFICE", "SOFTWARE", "SURFACE",
				"SURFACE_2", "SURFACE_CN_2", "WINDOWPHONE", "WINDOWS",
				"WINDOWS_8", "GENERAL_PRODUCT" }));
		GridBagConstraints gbc_cbbProductType = new GridBagConstraints();
		gbc_cbbProductType.insets = new Insets(0, 0, 5, 0);
		gbc_cbbProductType.fill = GridBagConstraints.HORIZONTAL;
		gbc_cbbProductType.gridx = 1;
		gbc_cbbProductType.gridy = 4;
		panel_1.add(cbbProductType, gbc_cbbProductType);

		JLabel lbVariantNumber = new JLabel("Variant number");
		GridBagConstraints gbc_lbVariantNumber = new GridBagConstraints();
		gbc_lbVariantNumber.insets = new Insets(0, 0, 5, 5);
		gbc_lbVariantNumber.anchor = GridBagConstraints.EAST;
		gbc_lbVariantNumber.gridx = 0;
		gbc_lbVariantNumber.gridy = 5;
		panel_1.add(lbVariantNumber, gbc_lbVariantNumber);

		JComboboxNumberFlagReplace cbbNumberVariant = new JComboboxNumberFlagReplace(
				1, 20);
		cbbNumberVariant.setName("cbbNumberVariant");
		cbbNumberVariant.setReplaceTexts(new String[] {
				"@TRUE:START@$1@TRUE:END@@FALSE:START@@FALSE:END@",
				"@TRUE:START@$1@TRUE:END@@FALSE:START@@FALSE:END@",
				"@TRUE:START@$1@TRUE:END@@FALSE:START@@FALSE:END@",
				"@TRUE:START@$1@TRUE:END@@FALSE:START@@FALSE:END@",
				"@TRUE:START@$1@TRUE:END@@FALSE:START@@FALSE:END@",
				"@TRUE:START@$1@TRUE:END@@FALSE:START@@FALSE:END@",
				"@TRUE:START@$1@TRUE:END@@FALSE:START@@FALSE:END@",
				"@TRUE:START@$1@TRUE:END@@FALSE:START@@FALSE:END@",
				"@TRUE:START@$1@TRUE:END@@FALSE:START@@FALSE:END@",
				"@TRUE:START@$1@TRUE:END@@FALSE:START@@FALSE:END@",
				"@TRUE:START@$1@TRUE:END@@FALSE:START@@FALSE:END@",
				"@TRUE:START@$1@TRUE:END@@FALSE:START@@FALSE:END@",
				"@TRUE:START@$1@TRUE:END@@FALSE:START@@FALSE:END@",
				"@TRUE:START@$1@TRUE:END@@FALSE:START@@FALSE:END@",
				"@TRUE:START@$1@TRUE:END@@FALSE:START@@FALSE:END@",
				"@TRUE:START@$1@TRUE:END@@FALSE:START@@FALSE:END@",
				"@TRUE:START@$1@TRUE:END@@FALSE:START@@FALSE:END@",
				"@TRUE:START@$1@TRUE:END@@FALSE:START@@FALSE:END@",
				"@TRUE:START@$1@TRUE:END@@FALSE:START@@FALSE:END@",
				"@TRUE:START@$1@TRUE:END@@FALSE:START@@FALSE:END@" });
		cbbNumberVariant.setFindTexts(new String[] {
				"@VARIANT1:START@(.*?)@VARIANT1:END@",
				"@VARIANT2:START@(.*?)@VARIANT2:END@",
				"@VARIANT3:START@(.*?)@VARIANT3:END@",
				"@VARIANT4:START@(.*?)@VARIANT4:END@",
				"@VARIANT5:START@(.*?)@VARIANT5:END@",
				"@VARIANT6:START@(.*?)@VARIANT6:END@",
				"@VARIANT7:START@(.*?)@VARIANT7:END@",
				"@VARIANT8:START@(.*?)@VARIANT8:END@",
				"@VARIANT9:START@(.*?)@VARIANT9:END@",
				"@VARIANT10:START@(.*?)@VARIANT10:END@",
				"@VARIANT11:START@(.*?)@VARIANT11:END@",
				"@VARIANT12:START@(.*?)@VARIANT12:END@",
				"@VARIANT13:START@(.*?)@VARIANT13:END@",
				"@VARIANT14:START@(.*?)@VARIANT14:END@",
				"@VARIANT15:START@(.*?)@VARIANT15:END@",
				"@VARIANT16:START@(.*?)@VARIANT16:END@",
				"@VARIANT17:START@(.*?)@VARIANT17:END@",
				"@VARIANT18:START@(.*?)@VARIANT18:END@",
				"@VARIANT19:START@(.*?)@VARIANT19:END@",
				"@VARIANT20:START@(.*?)@VARIANT20:END@" });
		GridBagConstraints gbc_cbbNumberVariant = new GridBagConstraints();
		gbc_cbbNumberVariant.insets = new Insets(0, 0, 5, 0);
		gbc_cbbNumberVariant.fill = GridBagConstraints.HORIZONTAL;
		gbc_cbbNumberVariant.gridx = 1;
		gbc_cbbNumberVariant.gridy = 5;
		panel_1.add(cbbNumberVariant, gbc_cbbNumberVariant);

		JLabel lbImageDetailNumber = new JLabel("Image detail number");
		GridBagConstraints gbc_lbImageDetailNumber = new GridBagConstraints();
		gbc_lbImageDetailNumber.insets = new Insets(0, 0, 5, 5);
		gbc_lbImageDetailNumber.anchor = GridBagConstraints.EAST;
		gbc_lbImageDetailNumber.gridx = 0;
		gbc_lbImageDetailNumber.gridy = 6;
		panel_1.add(lbImageDetailNumber, gbc_lbImageDetailNumber);

		JComboboxNumberFlagReplace cbbNumberImageDetail = new JComboboxNumberFlagReplace(
				1, 16);
		cbbNumberImageDetail.setName("cbbNumberImageDetail");
		cbbNumberImageDetail.setReplaceTexts(new String[] {
				"@TRUE:START@$1@TRUE:END@@FALSE:START@@FALSE:END@",
				"@TRUE:START@$1@TRUE:END@@FALSE:START@@FALSE:END@",
				"@TRUE:START@$1@TRUE:END@@FALSE:START@@FALSE:END@",
				"@TRUE:START@$1@TRUE:END@@FALSE:START@@FALSE:END@",
				"@TRUE:START@$1@TRUE:END@@FALSE:START@@FALSE:END@",
				"@TRUE:START@$1@TRUE:END@@FALSE:START@@FALSE:END@",
				"@TRUE:START@$1@TRUE:END@@FALSE:START@@FALSE:END@",
				"@TRUE:START@$1@TRUE:END@@FALSE:START@@FALSE:END@",
				"@TRUE:START@$1@TRUE:END@@FALSE:START@@FALSE:END@",
				"@TRUE:START@$1@TRUE:END@@FALSE:START@@FALSE:END@",
				"@TRUE:START@$1@TRUE:END@@FALSE:START@@FALSE:END@",
				"@TRUE:START@$1@TRUE:END@@FALSE:START@@FALSE:END@",
				"@TRUE:START@$1@TRUE:END@@FALSE:START@@FALSE:END@",
				"@TRUE:START@$1@TRUE:END@@FALSE:START@@FALSE:END@",
				"@TRUE:START@$1@TRUE:END@@FALSE:START@@FALSE:END@",
				"@TRUE:START@$1@TRUE:END@@FALSE:START@@FALSE:END@" });
		cbbNumberImageDetail
				.setFindTexts(new String[] {
						"@IMAGE_DETAIL_NUMBER_1:START@(.*?)@IMAGE_DETAIL_NUMBER_1:END@",
						"@IMAGE_DETAIL_NUMBER_2:START@(.*?)@IMAGE_DETAIL_NUMBER_2:END@",
						"@IMAGE_DETAIL_NUMBER_3:START@(.*?)@IMAGE_DETAIL_NUMBER_3:END@",
						"@IMAGE_DETAIL_NUMBER_4:START@(.*?)@IMAGE_DETAIL_NUMBER_4:END@",
						"@IMAGE_DETAIL_NUMBER_5:START@(.*?)@IMAGE_DETAIL_NUMBER_5:END@",
						"@IMAGE_DETAIL_NUMBER_6:START@(.*?)@IMAGE_DETAIL_NUMBER_6:END@",
						"@IMAGE_DETAIL_NUMBER_7:START@(.*?)@IMAGE_DETAIL_NUMBER_7:END@",
						"@IMAGE_DETAIL_NUMBER_8:START@(.*?)@IMAGE_DETAIL_NUMBER_8:END@",
						"@IMAGE_DETAIL_NUMBER_9:START@(.*?)@IMAGE_DETAIL_NUMBER_9:END@",
						"@IMAGE_DETAIL_NUMBER_10:START@(.*?)@IMAGE_DETAIL_NUMBER_10:END@",
						"@IMAGE_DETAIL_NUMBER_11:START@(.*?)@IMAGE_DETAIL_NUMBER_11:END@",
						"@IMAGE_DETAIL_NUMBER_12:START@(.*?)@IMAGE_DETAIL_NUMBER_12:END@",
						"@IMAGE_DETAIL_NUMBER_13:START@(.*?)@IMAGE_DETAIL_NUMBER_13:END@",
						"@IMAGE_DETAIL_NUMBER_14:START@(.*?)@IMAGE_DETAIL_NUMBER_14:END@",
						"@IMAGE_DETAIL_NUMBER_15:START@(.*?)@IMAGE_DETAIL_NUMBER_15:END@",
						"@IMAGE_DETAIL_NUMBER_16:START@(.*?)@IMAGE_DETAIL_NUMBER_16:END@" });
		GridBagConstraints gbc_cbbNumberImageDetail = new GridBagConstraints();
		gbc_cbbNumberImageDetail.insets = new Insets(0, 0, 5, 0);
		gbc_cbbNumberImageDetail.fill = GridBagConstraints.HORIZONTAL;
		gbc_cbbNumberImageDetail.gridx = 1;
		gbc_cbbNumberImageDetail.gridy = 6;
		panel_1.add(cbbNumberImageDetail, gbc_cbbNumberImageDetail);

		JLabel lbBaseProductName = new JLabel("Base product name");
		GridBagConstraints gbc_lbBaseProductName = new GridBagConstraints();
		gbc_lbBaseProductName.insets = new Insets(0, 0, 5, 5);
		gbc_lbBaseProductName.anchor = GridBagConstraints.EAST;
		gbc_lbBaseProductName.gridx = 0;
		gbc_lbBaseProductName.gridy = 7;
		panel_1.add(lbBaseProductName, gbc_lbBaseProductName);

		JTextFieldReplace tfBaseProductName = new JTextFieldReplace();
		tfBaseProductName.setName("tfBaseProductName");
		tfBaseProductName.setFindText("@BASE_PRODUCT_NAME@");
		GridBagConstraints gbc_tfBaseProductName = new GridBagConstraints();
		gbc_tfBaseProductName.insets = new Insets(0, 0, 5, 0);
		gbc_tfBaseProductName.fill = GridBagConstraints.HORIZONTAL;
		gbc_tfBaseProductName.gridx = 1;
		gbc_tfBaseProductName.gridy = 7;
		panel_1.add(tfBaseProductName, gbc_tfBaseProductName);

		JLabel lbBaseProductCode = new JLabel("Base product code");
		GridBagConstraints gbc_lbBaseProductCode = new GridBagConstraints();
		gbc_lbBaseProductCode.insets = new Insets(0, 0, 5, 5);
		gbc_lbBaseProductCode.anchor = GridBagConstraints.EAST;
		gbc_lbBaseProductCode.gridx = 0;
		gbc_lbBaseProductCode.gridy = 8;
		panel_1.add(lbBaseProductCode, gbc_lbBaseProductCode);

		JTextFieldReplace tfBaseProductCode = new JTextFieldReplace();
		tfBaseProductCode.setName("tfBaseProductCode");
		tfBaseProductCode.setFindText("@BASE_PRODUCT_CODE@");
		GridBagConstraints gbc_tfBaseProductCode = new GridBagConstraints();
		gbc_tfBaseProductCode.insets = new Insets(0, 0, 5, 0);
		gbc_tfBaseProductCode.fill = GridBagConstraints.HORIZONTAL;
		gbc_tfBaseProductCode.gridx = 1;
		gbc_tfBaseProductCode.gridy = 8;
		panel_1.add(tfBaseProductCode, gbc_tfBaseProductCode);

		JLabel lblBaseProductPrices = new JLabel("Base product prices");
		GridBagConstraints gbc_lblBaseProductPrices = new GridBagConstraints();
		gbc_lblBaseProductPrices.insets = new Insets(0, 0, 5, 5);
		gbc_lblBaseProductPrices.anchor = GridBagConstraints.EAST;
		gbc_lblBaseProductPrices.gridx = 0;
		gbc_lblBaseProductPrices.gridy = 9;
		panel_1.add(lblBaseProductPrices, gbc_lblBaseProductPrices);

		JTextFieldReplace tfBaseProductPrice = new JTextFieldReplace();
		tfBaseProductPrice.setName("tfBaseProductPrice");
		tfBaseProductPrice.setFindText("@BASE_PRODUCT_PRICES@");
		tfBaseProductPrice.setText("1 USD, 1 CNY");
		GridBagConstraints gbc_tfBaseProductPrice = new GridBagConstraints();
		gbc_tfBaseProductPrice.anchor = GridBagConstraints.NORTH;
		gbc_tfBaseProductPrice.insets = new Insets(0, 0, 5, 0);
		gbc_tfBaseProductPrice.fill = GridBagConstraints.HORIZONTAL;
		gbc_tfBaseProductPrice.gridx = 1;
		gbc_tfBaseProductPrice.gridy = 9;
		panel_1.add(tfBaseProductPrice, gbc_tfBaseProductPrice);

		JLabel lblBaseProductWas = new JLabel("Base product was prices");
		GridBagConstraints gbc_lblBaseProductWas = new GridBagConstraints();
		gbc_lblBaseProductWas.insets = new Insets(0, 0, 5, 5);
		gbc_lblBaseProductWas.anchor = GridBagConstraints.EAST;
		gbc_lblBaseProductWas.gridx = 0;
		gbc_lblBaseProductWas.gridy = 10;
		panel_1.add(lblBaseProductWas, gbc_lblBaseProductWas);

		JTextFieldReplace tfBaseProductWasPrice = new JTextFieldReplace();
		tfBaseProductWasPrice.setName("tfBaseProductWasPrice");
		tfBaseProductWasPrice.setFindText("@BASE_PRODUCT_WAS_PRICES@");
		GridBagConstraints gbc_tfBaseProductWasPrice = new GridBagConstraints();
		gbc_tfBaseProductWasPrice.insets = new Insets(0, 0, 5, 0);
		gbc_tfBaseProductWasPrice.fill = GridBagConstraints.HORIZONTAL;
		gbc_tfBaseProductWasPrice.gridx = 1;
		gbc_tfBaseProductWasPrice.gridy = 10;
		panel_1.add(tfBaseProductWasPrice, gbc_tfBaseProductWasPrice);

		JLabel lblNewLabel = new JLabel("Product description");
		GridBagConstraints gbc_lblNewLabel = new GridBagConstraints();
		gbc_lblNewLabel.anchor = GridBagConstraints.NORTHEAST;
		gbc_lblNewLabel.insets = new Insets(0, 0, 0, 5);
		gbc_lblNewLabel.gridx = 0;
		gbc_lblNewLabel.gridy = 11;
		panel_1.add(lblNewLabel, gbc_lblNewLabel);

		JScrollPane scrollPane = new JScrollPane();
		GridBagConstraints gbc_scrollPane = new GridBagConstraints();
		gbc_scrollPane.fill = GridBagConstraints.BOTH;
		gbc_scrollPane.gridx = 1;
		gbc_scrollPane.gridy = 11;
		panel_1.add(scrollPane, gbc_scrollPane);

		final JTextAreaReplace txtDescription = new JTextAreaReplace() {
			private static final long serialVersionUID = 8393977912767032380L;

			public String getReplaceText() {
				return getText().replace("\\", "\\\\");
			};
		};
		txtDescription
				.setText("<div class=\"key-features-accessory-extra component content-slide\" data-slide=\"keyFeature\">\r\n   <div class=\"content-block clearfix\">\r\n      <h3>主要特点</h3>\r\n      <div class=\"key-feature-content clearfix\">\r\n         </div>\r\n   </div>\r\n</div>");
		scrollPane.setViewportView(txtDescription);
		txtDescription.setLiteral(true);
		txtDescription.setIsAllowSaveConfig(false);
		txtDescription.setIsAllowSave(true);
		txtDescription.setName("txtDescription");
		txtDescription.setFindText("@PRODUCT_DESCRIPTIONN@");

		JPanel panelButtonBar = new JPanel();
		add(panelButtonBar, BorderLayout.SOUTH);

		JButton btnPreviewDescription = new JButton("Preview description");
		btnPreviewDescription.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				try {
					String productDetailContent = GenerateUtils
							.readFile("ProductDetail.htm");
					String description = txtDescription.getText();
					description = description.replaceAll("\\s+src=\"",
							" src=\".");
					GenerateUtils
							.writeFile(
									"ProductDetail.htm",
									productDetailContent
											.replaceAll(
													"(?ms)@DESCRIPTION:START@.*@DESCRIPTION:END@",
													MessageFormat
															.format("@DESCRIPTION:START@{0}@DESCRIPTION:END@",
																	description)));
				} catch (IOException e1) {
					e1.printStackTrace();
				}
			}
		});
		panelButtonBar.add(btnPreviewDescription);

	}
}
