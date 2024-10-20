import * as uuid from "uuid";
import * as path from "path";
import * as fs from "fs/promises"; // Импортируй fs/promises

class FileService {
  async saveFile(file) {
    try {
      const fileName = uuid.v4() + ".jpg";
      const filePath = path.resolve("static", fileName);
      await fs.rename(file.tempFilePath, filePath); // Перемещение файла
      return fileName;
    } catch (e) {
      console.log(e);
    }
  }
}

export default new FileService();
