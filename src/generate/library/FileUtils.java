package generate.library;

import generate.log.LogUtils;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.StandardCopyOption;

public class FileUtils {
	private FileUtils() {
	}

	public static void copyFile(File from, File to) throws IOException {
		String gitFile = to.getPath().replaceAll("\\\\", "/");
		gitFile = gitFile.replaceAll(".*/bin/(.+)", "$1");
		LogUtils.logGit("git add " + gitFile);
		if (!to.exists()) {
			to.createNewFile();
		}
		LogUtils.logCopyFile("copy\t" + from.toPath() + " \t" + to.toPath());
		Files.copy(from.toPath(), to.toPath(),
				StandardCopyOption.REPLACE_EXISTING);
	}

	public static String listFile(String folderRoot, String patten) {
		File folder = new File(folderRoot);
		String result = "";
		for (File file : folder.listFiles()) {
			if (file.isFile() && file.getName().matches(patten)) {
				result += file.getPath() + "\n";
			}
		}
		for (File file : folder.listFiles()) {
			if (file.isDirectory()) {
				result += listFile(file.getPath(), patten);
			}
		}
		return result;
	}
}
