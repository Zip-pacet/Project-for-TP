import * as uuid from "uuid";
import * as path from "path";
import * as fs from "fs/promises"; // Импортируй fs/promises

class FileService {
  async saveFile(file) {
    try {
      const fileName = uuid.v4() + ".jpg"; // Генерируем уникальное имя файла
      const filePath = path.resolve("static", fileName); // Определяем путь для сохранения

      console.log("Сохраняем файл по пути:", filePath); // Отладочное сообщение

      // Используем метод mv для перемещения файла
      await file.mv(filePath);

      console.log("Файл успешно сохранен:", fileName); // Отладочное сообщение
      return fileName; // Возвращаем имя сохраненного файла
    } catch (e) {
      console.log("Ошибка при сохранении файла:", e); // Выводим ошибку
      throw new Error("Ошибка при сохранении файла"); // Обработка ошибок
    }
  }
}

export default new FileService();
