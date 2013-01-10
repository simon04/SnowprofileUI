package at.ac.dbisinformatik.snowprofile.app;

/**
 * Copyright (c) 2012 Aleksandar Stojakovic
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * The Software shall be used for Good, not Evil.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

import java.io.File;
import java.util.logging.Logger;

public class ApplicationVariables {
    public static final File SNOWPROFILE_APP_DIR;
    public static final File CONFIG_FILE_DIRECTORY;
    public static final File CONFIG_FILE_LOCATION;
    public static final File DB_LOCATION;

    static {

        String path = System.getProperty("snowprofile.home");
        if (path != null) {
            SNOWPROFILE_APP_DIR = new File(path).getAbsoluteFile();
        } else {
            path = System.getenv("APPDATA");
            if (path != null) {
                SNOWPROFILE_APP_DIR = new File(path, "snowprofile");
            } else {
                SNOWPROFILE_APP_DIR = new File(System.getProperty("user.home"), ".snowprofile");
            }
        }

        Logger.getLogger(ApplicationVariables.class.getName()).info("Data directory: " + SNOWPROFILE_APP_DIR);

        CONFIG_FILE_DIRECTORY = new File(SNOWPROFILE_APP_DIR, "config/");
        CONFIG_FILE_LOCATION = new File(SNOWPROFILE_APP_DIR, "config/snowprofile.conf");
        DB_LOCATION = new File(SNOWPROFILE_APP_DIR, "db/");
    }
}
