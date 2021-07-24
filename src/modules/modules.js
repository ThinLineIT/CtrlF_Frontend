export const handleSearch = () => {
  const value = inputRef.current.value;
  console.log(value);
  inputRef.current.value = '';
};
export const onClick = () => {
  handleSearch();
};

export const onKeyPress = (event) => {
  if (event.key === 'Enter') {
    handleSearch();
  }
};
