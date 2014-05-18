package generate.core;

import generate.control.interfaces.HasName;
import generate.control.interfaces.HasReplaceScript;
import generate.form.MainFrame;
import generate.log.LogUtils;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

import jregex.Pattern;
import jregex.Replacer;

public class GenerateUtils {
	private GenerateUtils() {
	}

	private static List<HasReplaceScript> lstHasReplaceScript = new ArrayList<HasReplaceScript>();

	public static void updateListHasReplaceScript() {
		for (HasReplaceScript HasReplaceScript : ComponentUtils
				.getAllComponents(MainFrame.getInstance(),
						HasReplaceScript.class)) {
			lstHasReplaceScript.add(HasReplaceScript);
		}
	}

	public static String replace(String text) {
		String result = text;
		for (HasReplaceScript HasReplaceScript : lstHasReplaceScript) {
			result = replace(result, HasReplaceScript);
		}
		return result;
	}

	public static String replace(String source,
			HasReplaceScript hasReplaceScript) {
		if (hasReplaceScript instanceof HasName) {
			LogUtils.logInfo("Replace with "
					+ ((HasName) hasReplaceScript).getName());
		}
		String result = source;
		for (String[] replacer : hasReplaceScript.getReplaceScript()) {
			if (replacer.length >= 2 && replacer[1] != null
					&& replacer[0] != null) {
				if (hasReplaceScript.isLiteral()) {
					result = replace(result, replacer[0],
							replacer[1].replace("\\", "\\\\"));
				} else {
					result = replace(result, replacer[0], replacer[1]);
				}
			}
		}
		return result;
	}

	public static String replace(String sourceString, String findString,
			String replaceString) {
		Pattern pattern = new Pattern(findString, Pattern.DOTALL);
		Replacer replacer = pattern.replacer(replaceString);
		return replacer.replace(sourceString);
	}

	public static void generate(File dstFolder, File srcFile)
			throws IOException {
		File dstFile = new File(dstFolder, replace(srcFile.getName()).replace(
				".template", ".impex"));
		if (srcFile.isDirectory()) {
			dstFile.mkdir();
		}
		String gitFile = dstFile.getPath().replaceAll("\\\\", "/");
		gitFile = gitFile.replaceAll(".*/bin/(.+)", "$1");
		LogUtils.logGit("git add " + gitFile);
		if (srcFile.isDirectory()) {
			for (File file : srcFile.listFiles()) {
				generate(dstFile, file);
			}
		} else {
			String testString;
			testString = GenerateUtils.readFile(srcFile.getPath(),
					StandardCharsets.UTF_8);
			testString = GenerateUtils.replace(testString);
			PrintWriter fw = new PrintWriter(dstFile, "UTF-8");
			fw.write(testString);
			fw.close();
		}

	}

	public static void generate(File folder) {
		try {
			File templateFolder = new File("template");
			for (File file : templateFolder.listFiles()) {
				generate(folder, file);
			}

		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	public static String readFile(String path, Charset encoding)
			throws IOException {
		byte[] encoded = Files.readAllBytes(Paths.get(path));
		return new String(encoded, encoding);
	}

	public static String readFile(String path) throws IOException {
		return readFile(path, StandardCharsets.UTF_8);
	}

	public static void writeFile(String file, String content) {
		PrintWriter fw;
		try {
			fw = new PrintWriter(new File(file), "UTF-8");
			fw.write(content);
			fw.close();
		} catch (Exception ex) {
			LogUtils.logError(ex);
		}
	}

}
