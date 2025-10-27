-- CreateTable
CREATE TABLE "public"."User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- Insert initial data
-- Admin user (password: pass)
INSERT INTO "public"."User" ("name", "email", "password", "isAdmin", "createdAt", "updatedAt") VALUES
('Admin User', 'admin@lh.sandbox', '$2b$10$sfEHBSNtaYrFbDVpVWHAmeBKbhjVL/Ry62G59nNa9Gyc/LmubsAAe', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Sample users (password: UserPass123)
INSERT INTO "public"."User" ("name", "email", "password", "isAdmin", "createdAt", "updatedAt") VALUES
('John Doe', 'john@example.com', '$2b$10$UOoQc5dUSXFnzWhzz5Yeyuxcyg/iVNgySZ.qcMJ4vOD8Ph6h/L7v6', false, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Jane Smith', 'jane@example.com', '$2b$10$UOoQc5dUSXFnzWhzz5Yeyuxcyg/iVNgySZ.qcMJ4vOD8Ph6h/L7v6', false, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Bob Wilson', 'bob@example.com', '$2b$10$UOoQc5dUSXFnzWhzz5Yeyuxcyg/iVNgySZ.qcMJ4vOD8Ph6h/L7v6', false, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
