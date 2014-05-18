package generate.control.impls;

import generate.control.interfaces.HasModel;
import generate.core.ComponentUtils;
import generate.library.TaskUtils;

import java.awt.Component;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.text.MessageFormat;
import java.util.TimerTask;

import javax.swing.JCheckBoxMenuItem;
import javax.swing.JPopupMenu;
import javax.swing.event.PopupMenuEvent;
import javax.swing.event.PopupMenuListener;

public class JTextFieldMultiSelectReplace extends JTextFieldReplace implements
		HasModel {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private JPopupMenu popupMenu;
	private String[] models;

	public String[] getModel() {
		return models;
	}

	public void setModel(String[] models) {
		this.models = models;
		for (String model : models) {
			popupMenu.add(new JCheckBoxMenuItem(model));
		}
	}

	public JTextFieldMultiSelectReplace() {
		addMouseListener(new MouseAdapter() {
			@Override
			public void mouseClicked(MouseEvent e) {
				popupMenu.show(JTextFieldMultiSelectReplace.this, 0,
						getHeight());
			}
		});
		popupMenu = new JPopupMenu();
		popupMenu.addPopupMenuListener(new PopupMenuListener() {
			public void popupMenuCanceled(PopupMenuEvent e) {
			}

			public void popupMenuWillBecomeInvisible(PopupMenuEvent e) {
				TaskUtils.createDelayTask(new TimerTask() {

					@Override
					public void run() {
						String text = "";
						for (Component component : popupMenu.getComponents()) {
							if (component instanceof JCheckBoxMenuItem) {
								if (((JCheckBoxMenuItem) component)
										.isSelected()) {
									text += ((JCheckBoxMenuItem) component)
											.getText() + ", ";
								}
							}
						}
						JTextFieldMultiSelectReplace.this.setText(text
								.replaceFirst("(.+), ", "$1"));
					}
				}, 10);
			}

			public void popupMenuWillBecomeVisible(PopupMenuEvent e) {
			}
		});
		addPopup(this, popupMenu);

	}

	private static void addPopup(Component component, final JPopupMenu popup) {
		component.addMouseListener(new MouseAdapter() {
			public void mousePressed(MouseEvent e) {
				if (e.isPopupTrigger()) {
					showMenu(e);
				}
			}

			public void mouseReleased(MouseEvent e) {
				if (e.isPopupTrigger()) {
					showMenu(e);
				}
			}

			private void showMenu(MouseEvent e) {
				popup.show(e.getComponent(), e.getX(), e.getY());
			}
		});
	}

	@Override
	public void setText(String t) {
		super.setText(t);
		if (t != null) {
			for (JCheckBoxMenuItem item : ComponentUtils.getAllComponents(
					popupMenu, JCheckBoxMenuItem.class)) {
				item.setSelected(t.matches(MessageFormat.format(
						"(?m).*([^\\w]|^){0}([^\\w]|$).*", item.getText())));
			}
		} else {
			for (JCheckBoxMenuItem item : ComponentUtils.getAllComponents(
					popupMenu, JCheckBoxMenuItem.class)) {
				item.setSelected(false);
			}

		}
	}
}
