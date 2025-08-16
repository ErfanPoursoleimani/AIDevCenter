import { useNavigate, useLocation } from 'react-router-dom';
import { useCallback } from 'react';

export const useNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goHome = useCallback(() => {
    navigate('/');
  }, [navigate]);

  const goBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const goToRoute = useCallback((route: string, options?: { replace?: boolean; state?: any }) => {
    navigate(route, options);
  }, [navigate]);

  return {
    goHome,
    goBack,
    goToRoute,
    currentPath: location.pathname,
    searchParams: location.search,
    state: location.state
  };
};