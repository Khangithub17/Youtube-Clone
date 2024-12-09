import { useDispatch, useSelector } from 'react-redux';

const useAppDispatch = () => useDispatch(); // Fixed return type
const useAppSelector = useSelector;

export { useAppDispatch, useAppSelector };