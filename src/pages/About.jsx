import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1) // 이전 페이지로 이동
  }

  const handleGoHome = () => {
    navigate('/') // 홈으로 이동
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">About</h1>
        
        <div className="space-y-4 mb-8">
          <p className="text-gray-700 leading-relaxed">
            이 애플리케이션은 <strong>React Router DOM</strong>의 핵심 기능들을 
            실습하기 위해 제작되었습니다.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            주요 학습 내용 :
          </p>
          
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>BrowserRouter를 이용한 라우터 설정</li>
            <li>Routes와 Route를 이용한 라우트 정의</li>
            <li>NavLink를 이용한 활성 상태 네비게이션</li>
            <li>useNavigate Hook을 이용한 프로그래밍 방식 네비게이션</li>
            <li>Outlet을 이용한 중첩 라우팅</li>
          </ul>
        </div>

        <div className="flex space-x-4">
          <button
            onClick={handleGoBack}
            className="px-4 py-2 bg-gray-500 text-black rounded-md hover:bg-gray-600 transition-colors"
          >
            이전 페이지
          </button>
          
          <button
            onClick={handleGoHome}
            className="px-4 py-2 bg-blue-500 text-black rounded-md hover:bg-blue-600 transition-colors"
          >
            홈으로 이동
          </button>
        </div>
      </div>
    </div>
  )
}

export default About