import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const MyPage = () => {
  const navigate = useNavigate()
  const [userInfo, setUserInfo] = useState({
    name: 'React Developer',
    email: 'dev@example.com',
    role: 'Frontend Developer'
  })

  const handleEdit = (field, value) => {
    setUserInfo(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">My Page</h1>
          <button
            onClick={() => navigate('/')}
            className="px-4 py-2 bg-blue-500 text-black rounded-md hover:bg-blue-600 transition-colors"
          >
            홈으로
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* 프로필 정보 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              프로필 정보
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  이름
                </label>
                <input
                  type="text"
                  value={userInfo.name}
                  onChange={(e) => handleEdit('name', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  이메일
                </label>
                <input
                  type="email"
                  value={userInfo.email}
                  onChange={(e) => handleEdit('email', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  역할
                </label>
                <input
                  type="text"
                  value={userInfo.role}
                  onChange={(e) => handleEdit('role', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* 네비게이션 데모 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              네비게이션 데모
            </h2>
            
            <div className="space-y-3">
              <button
                onClick={() => navigate('/about')}
                className="w-full px-4 py-2 bg-green-500 text-black rounded-md hover:bg-green-600 transition-colors"
              >
                About 페이지로 이동
              </button>
              
              <button
                onClick={() => navigate('/', { replace: true })}
                className="w-full px-4 py-2 bg-yellow-500 text-black rounded-md hover:bg-yellow-600 transition-colors"
              >
                홈으로 이동 (replace)
              </button>
              
              <button
                onClick={() => navigate(-1)}
                className="w-full px-4 py-2 bg-gray-500 text-black rounded-md hover:bg-gray-600 transition-colors"
              >
                이전 페이지로
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyPage