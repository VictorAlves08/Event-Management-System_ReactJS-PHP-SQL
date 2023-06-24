export const formatStars = (starsLength = 1) =>{
  const star = {
    1: '⭐',
    2: '⭐⭐',
    3: '⭐⭐⭐',
    4: '⭐⭐⭐⭐',
    5: '⭐⭐⭐⭐⭐'
  };

  return star[starsLength];
}
