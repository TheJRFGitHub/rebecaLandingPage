"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Contact Info */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold">Contacto</h3>
          <p className="text-sm">Teléfono: +52 (placeholder)</p>
          <p className="text-sm">Correo: correo@placeholder.com</p>
        </div>

        {/* Seal */}
        <div className="text-center">
          <p className="text-sm">
            Made by <span className="font-semibold">JRF Technologies</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
