const jwt = require('jsonwebtoken');

function generarToken(usuario) {
  if (!process.env.JWT_SECRET) {
    throw new Error(
      'JWT_SECRET no está configurado en el archivo .env'
    );
  }

  return jwt.sign(
    {
      id: usuario.id,
      rol: usuario.rol,
      tipo: 'access',
    },
    process.env.JWT_SECRET,
    {
      expiresIn:
          process.env.JWT_EXPIRES_IN || '8h',
    }
  );
}

function generarRefreshToken(usuario) {
  if (!process.env.JWT_REFRESH_SECRET) {
    throw new Error(
      'JWT_REFRESH_SECRET no está configurado en el archivo .env'
    );
  }

  return jwt.sign(
    {
      id: usuario.id,
      rol: usuario.rol,
      tipo: 'refresh',
    },
    process.env.JWT_REFRESH_SECRET,
    {
      expiresIn:
          process.env.JWT_REFRESH_EXPIRES_IN || '7d',
    }
  );
}

function verificarToken(token) {
  if (!process.env.JWT_SECRET) {
    throw new Error(
      'JWT_SECRET no está configurado en el archivo .env'
    );
  }

  const payload = jwt.verify(
    token,
    process.env.JWT_SECRET
  );

  if (payload.tipo &&
      payload.tipo !== 'access') {
    throw new Error(
      'El token proporcionado no es un token de acceso'
    );
  }

  return payload;
}

function verificarRefreshToken(token) {
  if (!process.env.JWT_REFRESH_SECRET) {
    throw new Error(
      'JWT_REFRESH_SECRET no está configurado en el archivo .env'
    );
  }

  const payload = jwt.verify(
    token,
    process.env.JWT_REFRESH_SECRET
  );

  if (payload.tipo !== 'refresh') {
    throw new Error(
      'El token proporcionado no es un refresh token'
    );
  }

  return payload;
}

module.exports = {
  generarToken,
  generarRefreshToken,
  verificarToken,
  verificarRefreshToken,
};