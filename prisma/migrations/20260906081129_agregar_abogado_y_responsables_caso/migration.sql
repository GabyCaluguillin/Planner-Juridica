-- AlterEnum
ALTER TYPE "RolUsuario" ADD VALUE 'ABOGADO';

-- CreateTable
CREATE TABLE "CasoResponsable" (
    "id" SERIAL NOT NULL,
    "casoId" INTEGER NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "esPrincipal" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CasoResponsable_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CasoResponsable_casoId_usuarioId_key" ON "CasoResponsable"("casoId", "usuarioId");

-- AddForeignKey
ALTER TABLE "CasoResponsable" ADD CONSTRAINT "CasoResponsable_casoId_fkey" FOREIGN KEY ("casoId") REFERENCES "Caso"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CasoResponsable" ADD CONSTRAINT "CasoResponsable_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;
