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
				Messages.getString("BaseProductPanel.0")); //$NON-NLS-1$
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
				.setName(Messages.getString("BaseProductPanel.1")); //$NON-NLS-1$
		cbbElectonicVariantProductType
				.setFindText(Messages.getString("BaseProductPanel.2")); //$NON-NLS-1$
		cbbElectonicVariantProductType
				.setModel(new DefaultComboBoxModel<String>(new String[] {
						Messages.getString("BaseProductPanel.3"), Messages.getString("BaseProductPanel.4"), Messages.getString("BaseProductPanel.5"), Messages.getString("BaseProductPanel.6"), //$NON-NLS-1$ //$NON-NLS-2$ //$NON-NLS-3$ //$NON-NLS-4$
						Messages.getString("BaseProductPanel.7"), Messages.getString("BaseProductPanel.8"), Messages.getString("BaseProductPanel.9"), Messages.getString("BaseProductPanel.10"), //$NON-NLS-1$ //$NON-NLS-2$ //$NON-NLS-3$ //$NON-NLS-4$
						Messages.getString("BaseProductPanel.11"), Messages.getString("BaseProductPanel.12"), Messages.getString("BaseProductPanel.13") })); //$NON-NLS-1$ //$NON-NLS-2$ //$NON-NLS-3$
		GridBagConstraints gbc_cbbVariantProductType = new GridBagConstraints();
		gbc_cbbVariantProductType.insets = new Insets(0, 0, 5, 0);
		gbc_cbbVariantProductType.fill = GridBagConstraints.HORIZONTAL;
		gbc_cbbVariantProductType.gridx = 1;
		gbc_cbbVariantProductType.gridy = 0;
		panel_1.add(cbbElectonicVariantProductType, gbc_cbbVariantProductType);

		JLabel lblSuperCategory = new JLabel(Messages.getString("BaseProductPanel.14")); //$NON-NLS-1$
		GridBagConstraints gbc_lblSuperCategory = new GridBagConstraints();
		gbc_lblSuperCategory.anchor = GridBagConstraints.EAST;
		gbc_lblSuperCategory.insets = new Insets(0, 0, 5, 5);
		gbc_lblSuperCategory.gridx = 0;
		gbc_lblSuperCategory.gridy = 1;
		panel_1.add(lblSuperCategory, gbc_lblSuperCategory);

		JTextFieldMultiSelectReplace tfSuperCategory = new JTextFieldMultiSelectReplace();
		tfSuperCategory.setName(Messages.getString("BaseProductPanel.15")); //$NON-NLS-1$
		tfSuperCategory.setModel(new String[] { Messages.getString("BaseProductPanel.16"), Messages.getString("BaseProductPanel.17"), //$NON-NLS-1$ //$NON-NLS-2$
				Messages.getString("BaseProductPanel.18"), Messages.getString("BaseProductPanel.19"), Messages.getString("BaseProductPanel.20"), //$NON-NLS-1$ //$NON-NLS-2$ //$NON-NLS-3$
				Messages.getString("BaseProductPanel.21"), Messages.getString("BaseProductPanel.22"), Messages.getString("BaseProductPanel.23"), Messages.getString("BaseProductPanel.24"), Messages.getString("BaseProductPanel.25"), //$NON-NLS-1$ //$NON-NLS-2$ //$NON-NLS-3$ //$NON-NLS-4$ //$NON-NLS-5$
				Messages.getString("BaseProductPanel.26"), Messages.getString("BaseProductPanel.27"), Messages.getString("BaseProductPanel.28") }); //$NON-NLS-1$ //$NON-NLS-2$ //$NON-NLS-3$
		tfSuperCategory.setEditable(false);
		tfSuperCategory.setFindText(Messages.getString("BaseProductPanel.29")); //$NON-NLS-1$
		GridBagConstraints gbc_tfSuperCategory = new GridBagConstraints();
		gbc_tfSuperCategory.insets = new Insets(0, 0, 5, 0);
		gbc_tfSuperCategory.fill = GridBagConstraints.HORIZONTAL;
		gbc_tfSuperCategory.gridx = 1;
		gbc_tfSuperCategory.gridy = 1;
		panel_1.add(tfSuperCategory, gbc_tfSuperCategory);

		JLabel lblSaleStatus = new JLabel(Messages.getString("BaseProductPanel.30")); //$NON-NLS-1$
		GridBagConstraints gbc_lblSaleStatus = new GridBagConstraints();
		gbc_lblSaleStatus.insets = new Insets(0, 0, 5, 5);
		gbc_lblSaleStatus.anchor = GridBagConstraints.EAST;
		gbc_lblSaleStatus.gridx = 0;
		gbc_lblSaleStatus.gridy = 2;
		panel_1.add(lblSaleStatus, gbc_lblSaleStatus);

		JComboboxReplace cbbSaleStatus = new JComboboxReplace();
		cbbSaleStatus.setName(Messages.getString("BaseProductPanel.31")); //$NON-NLS-1$
		cbbSaleStatus.setFindText(Messages.getString("BaseProductPanel.32")); //$NON-NLS-1$
		cbbSaleStatus.setModel(new DefaultComboBoxModel<String>(new String[] {
				Messages.getString("BaseProductPanel.33"), Messages.getString("BaseProductPanel.34"), Messages.getString("BaseProductPanel.35"), Messages.getString("BaseProductPanel.36") })); //$NON-NLS-1$ //$NON-NLS-2$ //$NON-NLS-3$ //$NON-NLS-4$
		GridBagConstraints gbc_cbbSaleStatus = new GridBagConstraints();
		gbc_cbbSaleStatus.insets = new Insets(0, 0, 5, 0);
		gbc_cbbSaleStatus.fill = GridBagConstraints.HORIZONTAL;
		gbc_cbbSaleStatus.gridx = 1;
		gbc_cbbSaleStatus.gridy = 2;
		panel_1.add(cbbSaleStatus, gbc_cbbSaleStatus);

		JLabel lblVariantType = new JLabel(Messages.getString("BaseProductPanel.37")); //$NON-NLS-1$
		GridBagConstraints gbc_lblVariantType = new GridBagConstraints();
		gbc_lblVariantType.insets = new Insets(0, 0, 5, 5);
		gbc_lblVariantType.anchor = GridBagConstraints.EAST;
		gbc_lblVariantType.gridx = 0;
		gbc_lblVariantType.gridy = 3;
		panel_1.add(lblVariantType, gbc_lblVariantType);

		JComboboxReplace cbbVariantType = new JComboboxReplace();
		cbbVariantType.setName(Messages.getString("BaseProductPanel.38")); //$NON-NLS-1$
		cbbVariantType.setFindText(Messages.getString("BaseProductPanel.39")); //$NON-NLS-1$
		cbbVariantType.setModel(new DefaultComboBoxModel<String>(new String[] {
				Messages.getString("BaseProductPanel.40"), Messages.getString("BaseProductPanel.41"), //$NON-NLS-1$ //$NON-NLS-2$
				Messages.getString("BaseProductPanel.42"), Messages.getString("BaseProductPanel.43"), //$NON-NLS-1$ //$NON-NLS-2$
				Messages.getString("BaseProductPanel.44") })); //$NON-NLS-1$
		GridBagConstraints gbc_cbbVariantType = new GridBagConstraints();
		gbc_cbbVariantType.insets = new Insets(0, 0, 5, 0);
		gbc_cbbVariantType.fill = GridBagConstraints.HORIZONTAL;
		gbc_cbbVariantType.gridx = 1;
		gbc_cbbVariantType.gridy = 3;
		panel_1.add(cbbVariantType, gbc_cbbVariantType);

		JLabel lblProductType = new JLabel(Messages.getString("BaseProductPanel.45")); //$NON-NLS-1$
		GridBagConstraints gbc_lblProductType = new GridBagConstraints();
		gbc_lblProductType.insets = new Insets(0, 0, 5, 5);
		gbc_lblProductType.anchor = GridBagConstraints.EAST;
		gbc_lblProductType.gridx = 0;
		gbc_lblProductType.gridy = 4;
		panel_1.add(lblProductType, gbc_lblProductType);

		JComboboxReplace cbbProductType = new JComboboxReplace();
		cbbProductType.setName(Messages.getString("BaseProductPanel.46")); //$NON-NLS-1$
		cbbProductType.setFindText(Messages.getString("BaseProductPanel.47")); //$NON-NLS-1$
		cbbProductType.setModel(new DefaultComboBoxModel<String>(new String[] {
				Messages.getString("BaseProductPanel.48"), Messages.getString("BaseProductPanel.49"), Messages.getString("BaseProductPanel.50"), Messages.getString("BaseProductPanel.51"), Messages.getString("BaseProductPanel.52"), //$NON-NLS-1$ //$NON-NLS-2$ //$NON-NLS-3$ //$NON-NLS-4$ //$NON-NLS-5$
				Messages.getString("BaseProductPanel.53"), Messages.getString("BaseProductPanel.54"), Messages.getString("BaseProductPanel.55"), Messages.getString("BaseProductPanel.56"), //$NON-NLS-1$ //$NON-NLS-2$ //$NON-NLS-3$ //$NON-NLS-4$
				Messages.getString("BaseProductPanel.57"), Messages.getString("BaseProductPanel.58") })); //$NON-NLS-1$ //$NON-NLS-2$
		GridBagConstraints gbc_cbbProductType = new GridBagConstraints();
		gbc_cbbProductType.insets = new Insets(0, 0, 5, 0);
		gbc_cbbProductType.fill = GridBagConstraints.HORIZONTAL;
		gbc_cbbProductType.gridx = 1;
		gbc_cbbProductType.gridy = 4;
		panel_1.add(cbbProductType, gbc_cbbProductType);

		JLabel lbVariantNumber = new JLabel(Messages.getString("BaseProductPanel.59")); //$NON-NLS-1$
		GridBagConstraints gbc_lbVariantNumber = new GridBagConstraints();
		gbc_lbVariantNumber.insets = new Insets(0, 0, 5, 5);
		gbc_lbVariantNumber.anchor = GridBagConstraints.EAST;
		gbc_lbVariantNumber.gridx = 0;
		gbc_lbVariantNumber.gridy = 5;
		panel_1.add(lbVariantNumber, gbc_lbVariantNumber);

		JComboboxNumberFlagReplace cbbNumberVariant = new JComboboxNumberFlagReplace(
				1, 20);
		cbbNumberVariant.setName(Messages.getString("BaseProductPanel.60")); //$NON-NLS-1$
		cbbNumberVariant.setReplaceTexts(new String[] {
				Messages.getString("BaseProductPanel.61"), //$NON-NLS-1$
				Messages.getString("BaseProductPanel.62"), //$NON-NLS-1$
				Messages.getString("BaseProductPanel.63"), //$NON-NLS-1$
				Messages.getString("BaseProductPanel.64"), //$NON-NLS-1$
				Messages.getString("BaseProductPanel.65"), //$NON-NLS-1$
				Messages.getString("BaseProductPanel.66"), //$NON-NLS-1$
				Messages.getString("BaseProductPanel.67"), //$NON-NLS-1$
				Messages.getString("BaseProductPanel.68"), //$NON-NLS-1$
				Messages.getString("BaseProductPanel.69"), //$NON-NLS-1$
				Messages.getString("BaseProductPanel.70"), //$NON-NLS-1$
				Messages.getString("BaseProductPanel.71"), //$NON-NLS-1$
				Messages.getString("BaseProductPanel.72"), //$NON-NLS-1$
				Messages.getString("BaseProductPanel.73"), //$NON-NLS-1$
				Messages.getString("BaseProductPanel.74"), //$NON-NLS-1$
				Messages.getString("BaseProductPanel.75"), //$NON-NLS-1$
				Messages.getString("BaseProductPanel.76"), //$NON-NLS-1$
				Messages.getString("BaseProductPanel.77"), //$NON-NLS-1$
				Messages.getString("BaseProductPanel.78"), //$NON-NLS-1$
				Messages.getString("BaseProductPanel.79"), //$NON-NLS-1$
				Messages.getString("BaseProductPanel.80") }); //$NON-NLS-1$
		cbbNumberVariant.setFindTexts(new String[] {
				Messages.getString("BaseProductPanel.81"), //$NON-NLS-1$
				Messages.getString("BaseProductPanel.82"), //$NON-NLS-1$
				Messages.getString("BaseProductPanel.83"), //$NON-NLS-1$
				Messages.getString("BaseProductPanel.84"), //$NON-NLS-1$
				Messages.getString("BaseProductPanel.85"), //$NON-NLS-1$
				Messages.getString("BaseProductPanel.86"), //$NON-NLS-1$
				Messages.getString("BaseProductPanel.87"), //$NON-NLS-1$
				Messages.getString("BaseProductPanel.88"), //$NON-NLS-1$
				Messages.getString("BaseProductPanel.89"), //$NON-NLS-1$
				Messages.getString("BaseProductPanel.90"), //$NON-NLS-1$
				Messages.getString("BaseProductPanel.91"), //$NON-NLS-1$
				Messages.getString("BaseProductPanel.92"), //$NON-NLS-1$
				Messages.getString("BaseProductPanel.93"), //$NON-NLS-1$
				Messages.getString("BaseProductPanel.94"), //$NON-NLS-1$
				Messages.getString("BaseProductPanel.95"), //$NON-NLS-1$
				Messages.getString("BaseProductPanel.96"), //$NON-NLS-1$
				Messages.getString("BaseProductPanel.97"), //$NON-NLS-1$
				Messages.getString("BaseProductPanel.98"), //$NON-NLS-1$
				Messages.getString("BaseProductPanel.99"), //$NON-NLS-1$
				Messages.getString("BaseProductPanel.100") }); //$NON-NLS-1$
		GridBagConstraints gbc_cbbNumberVariant = new GridBagConstraints();
		gbc_cbbNumberVariant.insets = new Insets(0, 0, 5, 0);
		gbc_cbbNumberVariant.fill = GridBagConstraints.HORIZONTAL;
		gbc_cbbNumberVariant.gridx = 1;
		gbc_cbbNumberVariant.gridy = 5;
		panel_1.add(cbbNumberVariant, gbc_cbbNumberVariant);

		JLabel lbImageDetailNumber = new JLabel(Messages.getString("BaseProductPanel.101")); //$NON-NLS-1$
		GridBagConstraints gbc_lbImageDetailNumber = new GridBagConstraints();
		gbc_lbImageDetailNumber.insets = new Insets(0, 0, 5, 5);
		gbc_lbImageDetailNumber.anchor = GridBagConstraints.EAST;
		gbc_lbImageDetailNumber.gridx = 0;
		gbc_lbImageDetailNumber.gridy = 6;
		panel_1.add(lbImageDetailNumber, gbc_lbImageDetailNumber);

		JComboboxNumberFlagReplace cbbNumberImageDetail = new JComboboxNumberFlagReplace(
				1, 16);
		cbbNumberImageDetail.setName(Messages.getString("BaseProductPanel.102")); //$NON-NLS-1$
		cbbNumberImageDetail.setReplaceTexts(new String[] {
				Messages.getString("BaseProductPanel.103"), //$NON-NLS-1$
				Messages.getString("BaseProductPanel.104"), //$NON-NLS-1$
				Messages.getString("BaseProductPanel.105"), //$NON-NLS-1$
				Messages.getString("BaseProductPanel.106"), //$NON-NLS-1$
				Messages.getString("BaseProductPanel.107"), //$NON-NLS-1$
				Messages.getString("BaseProductPanel.108"), //$NON-NLS-1$
				Messages.getString("BaseProductPanel.109"), //$NON-NLS-1$
				Messages.getString("BaseProductPanel.110"), //$NON-NLS-1$
				Messages.getString("BaseProductPanel.111"), //$NON-NLS-1$
				Messages.getString("BaseProductPanel.112"), //$NON-NLS-1$
				Messages.getString("BaseProductPanel.113"), //$NON-NLS-1$
				Messages.getString("BaseProductPanel.114"), //$NON-NLS-1$
				Messages.getString("BaseProductPanel.115"), //$NON-NLS-1$
				Messages.getString("BaseProductPanel.116"), //$NON-NLS-1$
				Messages.getString("BaseProductPanel.117"), //$NON-NLS-1$
				Messages.getString("BaseProductPanel.118") }); //$NON-NLS-1$
		cbbNumberImageDetail
				.setFindTexts(new String[] {
						Messages.getString("BaseProductPanel.119"), //$NON-NLS-1$
						Messages.getString("BaseProductPanel.120"), //$NON-NLS-1$
						Messages.getString("BaseProductPanel.121"), //$NON-NLS-1$
						Messages.getString("BaseProductPanel.122"), //$NON-NLS-1$
						Messages.getString("BaseProductPanel.123"), //$NON-NLS-1$
						Messages.getString("BaseProductPanel.124"), //$NON-NLS-1$
						Messages.getString("BaseProductPanel.125"), //$NON-NLS-1$
						Messages.getString("BaseProductPanel.126"), //$NON-NLS-1$
						Messages.getString("BaseProductPanel.127"), //$NON-NLS-1$
						Messages.getString("BaseProductPanel.128"), //$NON-NLS-1$
						Messages.getString("BaseProductPanel.129"), //$NON-NLS-1$
						Messages.getString("BaseProductPanel.130"), //$NON-NLS-1$
						Messages.getString("BaseProductPanel.131"), //$NON-NLS-1$
						Messages.getString("BaseProductPanel.132"), //$NON-NLS-1$
						Messages.getString("BaseProductPanel.133"), //$NON-NLS-1$
						Messages.getString("BaseProductPanel.134") }); //$NON-NLS-1$
		GridBagConstraints gbc_cbbNumberImageDetail = new GridBagConstraints();
		gbc_cbbNumberImageDetail.insets = new Insets(0, 0, 5, 0);
		gbc_cbbNumberImageDetail.fill = GridBagConstraints.HORIZONTAL;
		gbc_cbbNumberImageDetail.gridx = 1;
		gbc_cbbNumberImageDetail.gridy = 6;
		panel_1.add(cbbNumberImageDetail, gbc_cbbNumberImageDetail);

		JLabel lbBaseProductName = new JLabel(Messages.getString("BaseProductPanel.135")); //$NON-NLS-1$
		GridBagConstraints gbc_lbBaseProductName = new GridBagConstraints();
		gbc_lbBaseProductName.insets = new Insets(0, 0, 5, 5);
		gbc_lbBaseProductName.anchor = GridBagConstraints.EAST;
		gbc_lbBaseProductName.gridx = 0;
		gbc_lbBaseProductName.gridy = 7;
		panel_1.add(lbBaseProductName, gbc_lbBaseProductName);

		JTextFieldReplace tfBaseProductName = new JTextFieldReplace();
		tfBaseProductName.setName(Messages.getString("BaseProductPanel.136")); //$NON-NLS-1$
		tfBaseProductName.setFindText(Messages.getString("BaseProductPanel.137")); //$NON-NLS-1$
		GridBagConstraints gbc_tfBaseProductName = new GridBagConstraints();
		gbc_tfBaseProductName.insets = new Insets(0, 0, 5, 0);
		gbc_tfBaseProductName.fill = GridBagConstraints.HORIZONTAL;
		gbc_tfBaseProductName.gridx = 1;
		gbc_tfBaseProductName.gridy = 7;
		panel_1.add(tfBaseProductName, gbc_tfBaseProductName);

		JLabel lbBaseProductCode = new JLabel(Messages.getString("BaseProductPanel.138")); //$NON-NLS-1$
		GridBagConstraints gbc_lbBaseProductCode = new GridBagConstraints();
		gbc_lbBaseProductCode.insets = new Insets(0, 0, 5, 5);
		gbc_lbBaseProductCode.anchor = GridBagConstraints.EAST;
		gbc_lbBaseProductCode.gridx = 0;
		gbc_lbBaseProductCode.gridy = 8;
		panel_1.add(lbBaseProductCode, gbc_lbBaseProductCode);

		JTextFieldReplace tfBaseProductCode = new JTextFieldReplace();
		tfBaseProductCode.setName(Messages.getString("BaseProductPanel.139")); //$NON-NLS-1$
		tfBaseProductCode.setFindText(Messages.getString("BaseProductPanel.140")); //$NON-NLS-1$
		GridBagConstraints gbc_tfBaseProductCode = new GridBagConstraints();
		gbc_tfBaseProductCode.insets = new Insets(0, 0, 5, 0);
		gbc_tfBaseProductCode.fill = GridBagConstraints.HORIZONTAL;
		gbc_tfBaseProductCode.gridx = 1;
		gbc_tfBaseProductCode.gridy = 8;
		panel_1.add(tfBaseProductCode, gbc_tfBaseProductCode);

		JLabel lblBaseProductPrices = new JLabel(Messages.getString("BaseProductPanel.141")); //$NON-NLS-1$
		GridBagConstraints gbc_lblBaseProductPrices = new GridBagConstraints();
		gbc_lblBaseProductPrices.insets = new Insets(0, 0, 5, 5);
		gbc_lblBaseProductPrices.anchor = GridBagConstraints.EAST;
		gbc_lblBaseProductPrices.gridx = 0;
		gbc_lblBaseProductPrices.gridy = 9;
		panel_1.add(lblBaseProductPrices, gbc_lblBaseProductPrices);

		JTextFieldReplace tfBaseProductPrice = new JTextFieldReplace();
		tfBaseProductPrice.setName(Messages.getString("BaseProductPanel.142")); //$NON-NLS-1$
		tfBaseProductPrice.setFindText(Messages.getString("BaseProductPanel.143")); //$NON-NLS-1$
		tfBaseProductPrice.setText(Messages.getString("BaseProductPanel.144")); //$NON-NLS-1$
		GridBagConstraints gbc_tfBaseProductPrice = new GridBagConstraints();
		gbc_tfBaseProductPrice.anchor = GridBagConstraints.NORTH;
		gbc_tfBaseProductPrice.insets = new Insets(0, 0, 5, 0);
		gbc_tfBaseProductPrice.fill = GridBagConstraints.HORIZONTAL;
		gbc_tfBaseProductPrice.gridx = 1;
		gbc_tfBaseProductPrice.gridy = 9;
		panel_1.add(tfBaseProductPrice, gbc_tfBaseProductPrice);

		JLabel lblBaseProductWas = new JLabel(Messages.getString("BaseProductPanel.145")); //$NON-NLS-1$
		GridBagConstraints gbc_lblBaseProductWas = new GridBagConstraints();
		gbc_lblBaseProductWas.insets = new Insets(0, 0, 5, 5);
		gbc_lblBaseProductWas.anchor = GridBagConstraints.EAST;
		gbc_lblBaseProductWas.gridx = 0;
		gbc_lblBaseProductWas.gridy = 10;
		panel_1.add(lblBaseProductWas, gbc_lblBaseProductWas);

		JTextFieldReplace tfBaseProductWasPrice = new JTextFieldReplace();
		tfBaseProductWasPrice.setName(Messages.getString("BaseProductPanel.146")); //$NON-NLS-1$
		tfBaseProductWasPrice.setFindText(Messages.getString("BaseProductPanel.147")); //$NON-NLS-1$
		GridBagConstraints gbc_tfBaseProductWasPrice = new GridBagConstraints();
		gbc_tfBaseProductWasPrice.insets = new Insets(0, 0, 5, 0);
		gbc_tfBaseProductWasPrice.fill = GridBagConstraints.HORIZONTAL;
		gbc_tfBaseProductWasPrice.gridx = 1;
		gbc_tfBaseProductWasPrice.gridy = 10;
		panel_1.add(tfBaseProductWasPrice, gbc_tfBaseProductWasPrice);

		JLabel lblNewLabel = new JLabel(Messages.getString("BaseProductPanel.148")); //$NON-NLS-1$
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
				return getText().replace(Messages.getString("BaseProductPanel.149"), Messages.getString("BaseProductPanel.150")); //$NON-NLS-1$ //$NON-NLS-2$
			};
		};
		txtDescription
				.setText(Messages.getString("BaseProductPanel.151")); //$NON-NLS-1$
		scrollPane.setViewportView(txtDescription);
		txtDescription.setLiteral(true);
		txtDescription.setIsAllowSaveConfig(false);
		txtDescription.setIsAllowSave(true);
		txtDescription.setName(Messages.getString("BaseProductPanel.152")); //$NON-NLS-1$
		txtDescription.setFindText(Messages.getString("BaseProductPanel.153")); //$NON-NLS-1$

		JPanel panelButtonBar = new JPanel();
		add(panelButtonBar, BorderLayout.SOUTH);

		JButton btnPreviewDescription = new JButton(Messages.getString("BaseProductPanel.154")); //$NON-NLS-1$
		btnPreviewDescription.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				try {
					String productDetailContent = GenerateUtils
							.readFile(Messages.getString("BaseProductPanel.155")); //$NON-NLS-1$
					String description = txtDescription.getText();
					description = description.replaceAll(Messages.getString("BaseProductPanel.156"), //$NON-NLS-1$
							Messages.getString("BaseProductPanel.157")); //$NON-NLS-1$
					GenerateUtils
							.writeFile(
									Messages.getString("BaseProductPanel.158"), //$NON-NLS-1$
									productDetailContent
											.replaceAll(
													Messages.getString("BaseProductPanel.159"), //$NON-NLS-1$
													MessageFormat
															.format(Messages.getString("BaseProductPanel.160"), //$NON-NLS-1$
																	description)));
				} catch (IOException e1) {
					e1.printStackTrace();
				}
			}
		});
		panelButtonBar.add(btnPreviewDescription);

	}
}
