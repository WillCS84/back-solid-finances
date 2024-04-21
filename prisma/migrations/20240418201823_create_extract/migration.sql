-- CreateTable
CREATE TABLE "extrato" (
    "id_extrato" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "tipo" TEXT NOT NULL,
    "data_lancamento" TIMESTAMP(3) NOT NULL,
    "id_categoria" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "extrato_pkey" PRIMARY KEY ("id_extrato")
);

-- AddForeignKey
ALTER TABLE "extrato" ADD CONSTRAINT "extrato_id_categoria_fkey" FOREIGN KEY ("id_categoria") REFERENCES "categoria"("id_categoria") ON DELETE RESTRICT ON UPDATE CASCADE;
