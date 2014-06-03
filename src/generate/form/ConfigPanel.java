package generate.form;

import generate.control.impls.JTextFieldReplace;
import generate.library.TaskUtils;

import java.awt.BorderLayout;
import java.awt.GridBagConstraints;
import java.awt.GridBagLayout;
import java.awt.Insets;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.TimerTask;

import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTabbedPane;
import javax.swing.border.TitledBorder;

public class ConfigPanel extends JPanel {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private LogPanel log4j;

	public LogPanel getLog4j() {
		return log4j;
	}

	public LogPanel getLog4Git() {
		return log4Git;
	}

	private LogPanel log4Git;
	private JTextFieldReplace tfDateNow;
	private LogPanel log4CopyFile;

	public LogPanel getLog4CopyFile() {
		return log4CopyFile;
	}

	public ConfigPanel() {
		setLayout(new BorderLayout(0, 0));

		JPanel panelConfigCenter = new JPanel();
		add(panelConfigCenter, BorderLayout.NORTH);
		GridBagLayout gbl_panelConfigCenter = new GridBagLayout();
		gbl_panelConfigCenter.columnWidths = new int[] { 0, 0, 0 };
		gbl_panelConfigCenter.rowHeights = new int[] { 0, 0, 0, 0, 0, 0 };
		gbl_panelConfigCenter.columnWeights = new double[] { 0.0, 1.0,
				Double.MIN_VALUE };
		gbl_panelConfigCenter.rowWeights = new double[] { 0.0, 0.0, 0.0, 0.0, 0.0,
				Double.MIN_VALUE };
		panelConfigCenter.setLayout(gbl_panelConfigCenter);

		JLabel lblFolderMscn = new JLabel("Folder mscn");
		GridBagConstraints gbc_lblFolderMscn = new GridBagConstraints();
		gbc_lblFolderMscn.insets = new Insets(0, 0, 5, 5);
		gbc_lblFolderMscn.anchor = GridBagConstraints.WEST;
		gbc_lblFolderMscn.gridx = 0;
		gbc_lblFolderMscn.gridy = 0;
		panelConfigCenter.add(lblFolderMscn, gbc_lblFolderMscn);

		JTextFieldReplace tfMscsFolder = new JTextFieldReplace();
		tfMscsFolder.setIsAllowSave(false);
		tfMscsFolder.setIsAllowSaveConfig(true);
		tfMscsFolder.setLiteral(true);
		tfMscsFolder.setTextRuleScript(new String[] {});
		tfMscsFolder.setStringSource("");
		tfMscsFolder.setName("tfMscsFolder");
		tfMscsFolder.setFindText("@MSCS_FOLDER@");
		GridBagConstraints gbc_tfMscsFolder = new GridBagConstraints();
		gbc_tfMscsFolder.insets = new Insets(0, 0, 5, 0);
		gbc_tfMscsFolder.fill = GridBagConstraints.HORIZONTAL;
		gbc_tfMscsFolder.gridx = 1;
		gbc_tfMscsFolder.gridy = 0;
		panelConfigCenter.add(tfMscsFolder, gbc_tfMscsFolder);

		JLabel lblFolderImageProduct = new JLabel(
				"Product catalog image folder");
		GridBagConstraints gbc_lblFolderImageProduct = new GridBagConstraints();
		gbc_lblFolderImageProduct.insets = new Insets(0, 0, 5, 5);
		gbc_lblFolderImageProduct.anchor = GridBagConstraints.WEST;
		gbc_lblFolderImageProduct.gridx = 0;
		gbc_lblFolderImageProduct.gridy = 1;
		panelConfigCenter.add(lblFolderImageProduct, gbc_lblFolderImageProduct);

		JTextFieldReplace tfProductCatalogImage = new JTextFieldReplace();
		tfProductCatalogImage.setIsAllowSave(false);
		tfProductCatalogImage.setIsAllowSaveConfig(false);
		tfProductCatalogImage.setLiteral(true);
		tfProductCatalogImage.setFindText("@PRODUCT_CATALOG_IMAGE_FOLER@");
		tfProductCatalogImage.setReference(new String[] {"tfMscsFolder", "tfDeployVersion"});
		tfProductCatalogImage.setStringSource("@MSCS_FOLDER@");
		tfProductCatalogImage
				.setTextRuleScript(new String[] {".*", "$0\\\\ext-mss\\\\msscn\\\\msscninitialdata\\\\resources\\\\msscninitialdata\\\\releases\\\\productCatalogs\\\\msscnProductCatalog\\\\@DEPLOY_VERSION@\\\\images"});
		tfProductCatalogImage.setName("tfProductCatalogImage");
		GridBagConstraints gbc_tfProductCatalogImage = new GridBagConstraints();
		gbc_tfProductCatalogImage.insets = new Insets(0, 0, 5, 0);
		gbc_tfProductCatalogImage.fill = GridBagConstraints.HORIZONTAL;
		gbc_tfProductCatalogImage.gridx = 1;
		gbc_tfProductCatalogImage.gridy = 1;
		panelConfigCenter.add(tfProductCatalogImage, gbc_tfProductCatalogImage);

		JLabel lblDesktopUiImage = new JLabel("Desktop Static image folder");
		GridBagConstraints gbc_lblDesktopUiImage = new GridBagConstraints();
		gbc_lblDesktopUiImage.insets = new Insets(0, 0, 5, 5);
		gbc_lblDesktopUiImage.anchor = GridBagConstraints.WEST;
		gbc_lblDesktopUiImage.gridx = 0;
		gbc_lblDesktopUiImage.gridy = 2;
		panelConfigCenter.add(lblDesktopUiImage, gbc_lblDesktopUiImage);

		JTextFieldReplace tfDesktopStaticImageFolder = new JTextFieldReplace();
		tfDesktopStaticImageFolder.setIsAllowSave(false);
		tfDesktopStaticImageFolder.setIsAllowSaveConfig(false);
		tfDesktopStaticImageFolder.setStringSource("@MSCS_FOLDER@");
		tfDesktopStaticImageFolder
				.setTextRuleScript(new String[] {
						".*",
						"$0\\\\ext-mss\\\\msscn\\\\msscnstorefront\\\\web\\\\webroot\\\\_ui\\\\desktop\\\\static\\\\img" });
		tfDesktopStaticImageFolder
				.setReference(new String[] { "tfMscsFolder" });
		tfDesktopStaticImageFolder.setLiteral(true);
		tfDesktopStaticImageFolder.setName("tfDesktopStaticImageFolder");
		tfDesktopStaticImageFolder.setFindText("@DESKTOP_UI_IMAGE_FOLDER@");
		GridBagConstraints gbc_tfDesktopStaticImageFolder = new GridBagConstraints();
		gbc_tfDesktopStaticImageFolder.insets = new Insets(0, 0, 5, 0);
		gbc_tfDesktopStaticImageFolder.fill = GridBagConstraints.HORIZONTAL;
		gbc_tfDesktopStaticImageFolder.gridx = 1;
		gbc_tfDesktopStaticImageFolder.gridy = 2;
		panelConfigCenter.add(tfDesktopStaticImageFolder,
				gbc_tfDesktopStaticImageFolder);
		
		JLabel lblDeployVersion = new JLabel("Deploy version");
		GridBagConstraints gbc_lblDeployVersion = new GridBagConstraints();
		gbc_lblDeployVersion.insets = new Insets(0, 0, 5, 5);
		gbc_lblDeployVersion.anchor = GridBagConstraints.EAST;
		gbc_lblDeployVersion.gridx = 0;
		gbc_lblDeployVersion.gridy = 3;
		panelConfigCenter.add(lblDeployVersion, gbc_lblDeployVersion);
		
		JTextFieldReplace tfDeployVersion = new JTextFieldReplace();
		tfDeployVersion.setIsAllowSaveConfig(true);
		tfDeployVersion.setFindText("@DEPLOY_VERSION@");
		tfDeployVersion.setName("tfDeployVersion");
		GridBagConstraints gbc_tfDeployVersion = new GridBagConstraints();
		gbc_tfDeployVersion.insets = new Insets(0, 0, 5, 0);
		gbc_tfDeployVersion.fill = GridBagConstraints.HORIZONTAL;
		gbc_tfDeployVersion.gridx = 1;
		gbc_tfDeployVersion.gridy = 3;
		panelConfigCenter.add(tfDeployVersion, gbc_tfDeployVersion);

		JLabel lblDateNow = new JLabel("Date now");
		GridBagConstraints gbc_lblDateNow = new GridBagConstraints();
		gbc_lblDateNow.insets = new Insets(0, 0, 0, 5);
		gbc_lblDateNow.anchor = GridBagConstraints.EAST;
		gbc_lblDateNow.gridx = 0;
		gbc_lblDateNow.gridy = 4;
		panelConfigCenter.add(lblDateNow, gbc_lblDateNow);

		tfDateNow = new JTextFieldReplace();
		tfDateNow.setLiteral(true);
		tfDateNow.setIsAllowSave(false);
		tfDateNow.setIsAllowSaveConfig(false);
		tfDateNow.setFindText("@DATE_NOW@");
		tfDateNow.setName("tfDateNow");
		GridBagConstraints gbc_tfDateNow = new GridBagConstraints();
		gbc_tfDateNow.fill = GridBagConstraints.HORIZONTAL;
		gbc_tfDateNow.gridx = 1;
		gbc_tfDateNow.gridy = 4;
		panelConfigCenter.add(tfDateNow, gbc_tfDateNow);

		JTabbedPane tabbedPaneLog = new JTabbedPane(JTabbedPane.TOP);
		tabbedPaneLog.setBorder(new TitledBorder(null, "",
				TitledBorder.LEADING, TitledBorder.TOP, null, null));
		add(tabbedPaneLog, BorderLayout.CENTER);

		log4j = new LogPanel("log4j.log");
		tabbedPaneLog.addTab("Log4j", null, log4j, null);

		log4Git = new LogPanel("git4Log.log");
		tabbedPaneLog.addTab("Git log", null, log4Git, null);
		
		log4CopyFile = new LogPanel("log4CopyFile");
		tabbedPaneLog.addTab("Copy file log", null, log4CopyFile, null);

		TaskUtils.createDelayTask(new TimerTask() {

			@Override
			public void run() {
//				tfDateNow.setText("ABC");
				tfDateNow.setText((new SimpleDateFormat("yyyy-MM-dd"))
						.format(new Date()));
			}
		}, 1723);
	}
}
