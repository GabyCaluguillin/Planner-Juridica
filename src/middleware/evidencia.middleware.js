const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const multer = require('multer');

const directorioEvidencias = path.join(
  process.cwd(),
  'uploads',
  'evidencias'
);

fs.mkdirSync(directorioEvidencias, {
  recursive: true,
});

const almacenamiento = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, directorioEvidencias);
  },

  filename: (req, file, cb) => {
    const extension = path
      .extname(file.originalname)
      .toLowerCase();

    const nombreSeguro =
      `evidencia_${Date.now()}_${crypto.randomUUID()}${extension}`;

    cb(null, nombreSeguro);
  },
});

const filtroArchivos = (req, file, cb) => {
  const tiposPermitidos = [
    'image/jpeg',
    'image/png',
    'image/webp',
    'image/heic',
    'image/heif',
  ];

  if (!tiposPermitidos.includes(file.mimetype)) {
    const error = new Error(
      'Solo se permiten archivos de imagen.'
    );

    error.statusCode = 400;
    return cb(error);
  }

  cb(null, true);
};

const uploadEvidencia = multer({
  storage: almacenamiento,
  fileFilter: filtroArchivos,
  limits: {
    fileSize: 5 * 1024 * 1024,
    files: 1,
  },
});

module.exports = {
  uploadEvidencia,
};
