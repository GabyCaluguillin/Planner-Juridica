-- CreateTable
CREATE TABLE "Reunion" (
    "id" SERIAL NOT NULL,
    "titulo" VARCHAR(150) NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "lugar" VARCHAR(200),
    "observaciones" TEXT,
    "casoId" INTEGER,
    "creadorId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Reunion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ParticipanteReunion" (
    "id" SERIAL NOT NULL,
    "reunionId" INTEGER NOT NULL,
    "usuarioId" INTEGER,
    "clienteId" INTEGER,
    "nombreExterno" VARCHAR(150),
    "correoExterno" VARCHAR(150),

    CONSTRAINT "ParticipanteReunion_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Reunion" ADD CONSTRAINT "Reunion_casoId_fkey" FOREIGN KEY ("casoId") REFERENCES "Caso"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reunion" ADD CONSTRAINT "Reunion_creadorId_fkey" FOREIGN KEY ("creadorId") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParticipanteReunion" ADD CONSTRAINT "ParticipanteReunion_reunionId_fkey" FOREIGN KEY ("reunionId") REFERENCES "Reunion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParticipanteReunion" ADD CONSTRAINT "ParticipanteReunion_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParticipanteReunion" ADD CONSTRAINT "ParticipanteReunion_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE SET NULL ON UPDATE CASCADE;
