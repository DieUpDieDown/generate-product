package generate.form;

import generate.library.TaskUtils;

import java.awt.BorderLayout;
import java.awt.FlowLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.TimerTask;

import javax.swing.JButton;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTextArea;


public class LogPanel extends JPanel
{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private JTextArea textArea;
	private JButton btnClear;
	private JButton btnClearFile;
	private JScrollPane scrollPane;
	private JPanel buttonBarPanel;
	public JPanel getButtonBarPanel()
	{
		return buttonBarPanel;
	}

	private String fileLogName;
	private File fileLog;
	private List<String> queueLog = new ArrayList<String>();

	public String getFileLogName()
	{
		return fileLogName;
	}

	public void setFileLogName(String fileLogName)
	{
		this.fileLogName = fileLogName;
		fileLog = new File(fileLogName);
		if (!fileLog.exists())
		{
			try
			{
				fileLog.createNewFile();
			}
			catch (IOException e)
			{
				e.printStackTrace();
			}
		}
	}

	public void log(String content)
	{
		queueLog.add(content);
	}

	public LogPanel(String fileLogName)
	{
		super();
		setFileLogName(fileLogName);
		setLayout(new BorderLayout(0, 0));

		buttonBarPanel = new JPanel();
		add(buttonBarPanel, BorderLayout.SOUTH);

		btnClear = new JButton("    Clear    ");
		btnClear.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				textArea.setText("");
			}
		});
		FlowLayout fl_buttonBarPanel = new FlowLayout(FlowLayout.CENTER, 5, 5);
		buttonBarPanel.setLayout(fl_buttonBarPanel);
		buttonBarPanel.add(btnClear);

		btnClearFile = new JButton("Clear file");
		btnClearFile.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				try
				{
					FileWriter fw = new FileWriter(fileLog, false);
					fw.close();
				}
				catch (IOException e1)
				{
					e1.printStackTrace();
				}
			}
		});
		buttonBarPanel.add(btnClearFile);

		scrollPane = new JScrollPane();
		add(scrollPane, BorderLayout.CENTER);

		textArea = new JTextArea();
		scrollPane.setViewportView(textArea);

		TaskUtils.createScheduleTask(new TimerTask()
		{

			@Override
			public void run()
			{
				if (queueLog.size() == 0)
				{
					return;
				}
				try
				{
					if (!fileLog.exists())
					{
						fileLog.createNewFile();
					}
					FileWriter fw = new FileWriter(fileLog, true);
					for (String log : queueLog)
					{
						fw.append(log + "\n");
						textArea.setText(textArea.getText() + log + "\n");
					}
					fw.close();
					queueLog.clear();
				}
				catch (IOException e)
				{
					e.printStackTrace();
				}
			}
		}, 3713, 3713);
	}

}
