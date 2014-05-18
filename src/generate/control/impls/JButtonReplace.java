package generate.control.impls;

import generate.control.interfaces.HasName;
import generate.control.interfaces.HasReplace;
import generate.control.interfaces.HasReplaceScript;
import generate.events.MessageUtils;
import generate.library.TaskUtils;

import javax.swing.JButton;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;
import java.util.TimerTask;

public class JButtonReplace extends JButton implements HasName, HasReplace,
		HasReplaceScript {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private boolean isLiteral;
	private String findText;
	private String replaceText;
	private boolean isFireVaueChangeWhenClick;

	public boolean isFireVaueChangeWhenClick() {
		return isFireVaueChangeWhenClick;
	}

	public void setFireVaueChangeWhenClick(boolean isFireVaueChangeWhenClick) {
		this.isFireVaueChangeWhenClick = isFireVaueChangeWhenClick;
	}

	public JButtonReplace(String string) {
		super(string);
		addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent arg0) {
				if (isFireVaueChangeWhenClick) {
					TaskUtils.createDelayTask(new TimerTask() {

						@Override
						public void run() {
							MessageUtils.getInstance().putValueChangeMessage(
									JButtonReplace.this);
						}
					}, 10);
				}
			}
		});
	}

	public void setLiteral(boolean isLiteral) {
		this.isLiteral = isLiteral;
	}

	@Override
	public boolean isLiteral() {
		return isLiteral;
	}

	@Override
	public String getFindText() {
		return findText;
	}

	@Override
	public void setFindText(String findText) {
		this.findText = findText;
	}

	@Override
	public String getReplaceText() {
		return replaceText;
	}

	@Override
	public void setReplaceText(String replaceText) {
		this.replaceText = replaceText;
	}

	@Override
	public String[][] getReplaceScript() {
		return new String[][] { new String[] { getFindText(), getReplaceText() } };
	}

}
