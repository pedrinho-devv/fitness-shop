import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-red-600">404 - Página não encontrada</h1>
      <p className="text-lg text-gray-600 mt-2">Oops! Parece que essa página não existe.</p>
      <Link to="/" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Voltar para a Home
      </Link>
    </div>
  );
}