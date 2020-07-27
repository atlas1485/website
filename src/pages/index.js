import { useEffect } from 'react'
import { navigate } from 'gatsby-link'

 export default () => {
  useEffect(() => {
    navigate('/your-redirect/');
  }, []);
  return null;
}