/*
  Warnings:

  - A unique constraint covering the columns `[idOperacion]` on the table `Cliente` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Cliente" ADD COLUMN     "idOperacion" VARCHAR(36);

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_idOperacion_key" ON "Cliente"("idOperacion");
