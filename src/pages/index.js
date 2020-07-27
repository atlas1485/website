import { useEffect } from 'react'
import { navigate } from 'gatsby-link'

 export default () => {
  useEffect(() => {
    navigate('/contractors');
  }, []);
  return null;
}