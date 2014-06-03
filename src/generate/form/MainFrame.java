package generate.form;

import generate.core.ConfigUtils;
import generate.core.GenerateUtils;
import generate.core.ImpexSaveUtils;
import generate.library.TaskUtils;

import java.awt.BorderLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.TimerTask;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JTabbedPane;

public class MainFrame extends JFrame {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private ConfigPanel panelConfig;

	public MainFrame() {

		JTabbedPane tabbedPane = new JTabbedPane(JTabbedPane.TOP);
		getContentPane().add(tabbedPane, BorderLayout.CENTER);

		panelConfig = new ConfigPanel();
		tabbedPane.addTab("Config", null, panelConfig, null);

		JPanel panelBaseProduct = new BaseProductPanel();
		tabbedPane.addTab("Base product", null, panelBaseProduct, null);

		VariantPanel variantPanel1 = new VariantPanel(1);
		variantPanel1.setReference(new String[] { "cbbNumberVariant" });
		tabbedPane.addTab("Variant 1", null, variantPanel1, null);
		tabbedPane.setEnabledAt(2, false);

		VariantPanel variantPanel2 = new VariantPanel(2);
		variantPanel2.setReference(new String[] { "cbbNumberVariant" });
		tabbedPane.addTab("Variant 2", null, variantPanel2, null);
		tabbedPane.setEnabledAt(3, false);

		VariantPanel variantPanel3 = new VariantPanel(3);
		variantPanel3.setReference(new String[] { "cbbNumberVariant" });
		tabbedPane.addTab("Variant 3", null, variantPanel3, null);
		tabbedPane.setEnabledAt(4, false);

		VariantPanel variantPanel4 = new VariantPanel(4);
		variantPanel4.setReference(new String[] { "cbbNumberVariant" });
		tabbedPane.addTab("Variant 4", null, variantPanel4, null);
		tabbedPane.setEnabledAt(5, false);

		VariantPanel variantPanel5 = new VariantPanel(5);
		variantPanel5.setReference(new String[] { "cbbNumberVariant" });
		tabbedPane.addTab("Variant 5", null, variantPanel5, null);
		tabbedPane.setEnabledAt(6, false);

		VariantPanel variantPanel6 = new VariantPanel(6);
		variantPanel6.setReference(new String[] { "cbbNumberVariant" });
		tabbedPane.addTab("Variant 6", null, variantPanel6, null);
		tabbedPane.setEnabledAt(7, false);

		VariantPanel variantPanel7 = new VariantPanel(7);
		variantPanel7.setReference(new String[] { "cbbNumberVariant" });
		tabbedPane.addTab("Variant 7", null, variantPanel7, null);
		tabbedPane.setEnabledAt(8, false);

		VariantPanel variantPanel8 = new VariantPanel(8);
		variantPanel8.setReference(new String[] { "cbbNumberVariant" });
		tabbedPane.addTab("Variant 8", null, variantPanel8, null);
		tabbedPane.setEnabledAt(9, false);

		/*VariantPanel variantPanel9 = new VariantPanel(9);
		variantPanel9.setReference(new String[] { "cbbNumberVariant" });
		tabbedPane.addTab("Variant 9", null, variantPanel9, null);
		tabbedPane.setEnabledAt(10, false);

		VariantPanel variantPanel10 = new VariantPanel(10);
		variantPanel10.setReference(new String[] { "cbbNumberVariant" });
		tabbedPane.addTab("Variant 10", null, variantPanel10, null);
		tabbedPane.setEnabledAt(11, false);

		VariantPanel variantPanel11 = new VariantPanel(11);
		variantPanel11.setReference(new String[] { "cbbNumberVariant" });
		tabbedPane.addTab("Variant 11", null, variantPanel11, null);
		tabbedPane.setEnabledAt(12, false);

		VariantPanel variantPanel12 = new VariantPanel(12);
		variantPanel12.setReference(new String[] { "cbbNumberVariant" });
		tabbedPane.addTab("Variant 12", null, variantPanel12, null);
		tabbedPane.setEnabledAt(13, false);

		VariantPanel variantPanel13 = new VariantPanel(13);
		variantPanel13.setReference(new String[] { "cbbNumberVariant" });
		tabbedPane.addTab("Variant 13", null, variantPanel13, null);
		tabbedPane.setEnabledAt(14, false);

		VariantPanel variantPanel14 = new VariantPanel(14);
		variantPanel14.setReference(new String[] { "cbbNumberVariant" });
		tabbedPane.addTab("Variant 14", null, variantPanel14, null);
		tabbedPane.setEnabledAt(15, false);

		VariantPanel variantPanel15 = new VariantPanel(15);
		variantPanel15.setReference(new String[] { "cbbNumberVariant" });
		tabbedPane.addTab("Variant 15", null, variantPanel15, null);
		tabbedPane.setEnabledAt(16, false);

		VariantPanel variantPanel16 = new VariantPanel(16);
		variantPanel16.setReference(new String[] { "cbbNumberVariant" });
		tabbedPane.addTab("Variant 16", null, variantPanel16, null);
		tabbedPane.setEnabledAt(17, false);

		VariantPanel variantPanel17 = new VariantPanel(17);
		variantPanel17.setReference(new String[] { "cbbNumberVariant" });
		tabbedPane.addTab("Variant 17", null, variantPanel17, null);
		tabbedPane.setEnabledAt(18, false);

		VariantPanel variantPanel18 = new VariantPanel(18);
		variantPanel18.setReference(new String[] { "cbbNumberVariant" });
		tabbedPane.addTab("Variant 18", null, variantPanel18, null);
		tabbedPane.setEnabledAt(19, false);

		VariantPanel variantPanel19 = new VariantPanel(19);
		variantPanel19.setReference(new String[] { "cbbNumberVariant" });
		tabbedPane.addTab("Variant 19", null, variantPanel19, null);
		tabbedPane.setEnabledAt(20, false);

		VariantPanel variantPanel20 = new VariantPanel(20);
		variantPanel20.setReference(new String[] { "cbbNumberVariant" });
		tabbedPane.addTab("Variant 20", null, variantPanel20, null);
		tabbedPane.setEnabledAt(21, false);*/

		JPanel panel = new JPanel();
		getContentPane().add(panel, BorderLayout.SOUTH);

		JButton btnSaveConfig = new JButton("Save config");
		btnSaveConfig.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				ConfigUtils.saveProperties();
			}
		});
		panel.add(btnSaveConfig);

		JButton btnOpenFile = new JButton("Load impex");
		btnOpenFile.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				ImpexSaveUtils.loadFromProperties();
			}
		});
		panel.add(btnOpenFile);

		JButton btnSaveImpex = new JButton("Save impex");
		btnSaveImpex.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				ImpexSaveUtils.saveToProperties();
			}
		});
		panel.add(btnSaveImpex);

		TaskUtils.createDelayTask(new TimerTask() {

			@Override
			public void run() {
				ConfigUtils.loadProperties();
			}
		}, 500);
	}

	private static MainFrame INSTANCE = null;

	public LogPanel getLog4j() {
		return panelConfig.getLog4j();
	}

	public LogPanel getLog4Git() {
		return panelConfig.getLog4Git();
	}

	public LogPanel getLog4CopyFile() {
		return panelConfig.getLog4CopyFile();
	}

	public static MainFrame getInstance() {
		if (INSTANCE == null) {
			INSTANCE = new MainFrame();
		}
		return INSTANCE;
	}

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		MainFrame roolPanel = getInstance();
		roolPanel.setVisible(true);
		roolPanel.setTitle("Xbatz GUI Example");
		roolPanel.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		roolPanel.setExtendedState(roolPanel.getExtendedState()
				| JFrame.MAXIMIZED_BOTH);

		GenerateUtils.updateListHasReplaceScript();
	}
}
