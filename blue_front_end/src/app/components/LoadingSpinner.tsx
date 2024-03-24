"use client"
import { useState, useEffect } from 'react';
import '../styling/LoadingSpinner.css';

interface LoadingSpinnerProps {
  className?: any;
}

const LoadingSpinner = (props: LoadingSpinnerProps) => {
  const [loadingText, setLoadingSpinner] = useState<string>('');
  let { className = '' } = props;

  useEffect(() => {
    const frameSets = {
      setA: ['◜ ', '◠', ' ◝', ' ◞', '◡', '◟ '],
      setB: ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠇', '⠏'],
    };
    const frames = frameSets['setB'];
    let loadStr = frames[0];
    let counter = 0;
    const interval = setInterval(() => {
      loadStr = frames[counter];
      counter = (counter + 1) % frames.length;
      setLoadingSpinner(loadStr);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return <div className={'loading-spinner disable-highlight ' + className}>{loadingText}</div>;
  //return <span className='loader'/>
};

export default LoadingSpinner;