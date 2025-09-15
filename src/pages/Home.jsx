import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to React Router Demo
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          이 프로젝트는 React Router DOM의 기본 사용법을 보여줍니다.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <Link
            to="/about"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              About 페이지
            </h2>
            <p className="text-gray-600">
              이 애플리케이션에 대한 정보를 확인하세요.
            </p>
          </Link>
          
          <Link
            to="/mypage"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              My Page
            </h2>
            <p className="text-gray-600">
              개인 정보와 설정을 관리하세요.
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home