import Sidebar from './Sidebar';
import Header from './Header';

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 bg-gray-100">{children}</main>
      </div>
    </div>
  );
}

export default DashboardLayout;