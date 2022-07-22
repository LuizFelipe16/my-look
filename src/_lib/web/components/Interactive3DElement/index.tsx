import dynamic from 'next/dynamic';
import type { SplineProps } from '@splinetool/react-spline';
import { View } from '../View';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
});

interface Interactive3DElementProps extends SplineProps {
  style: string | undefined | any;
}

export function Interactive3DElement({ style, ...rest }: Interactive3DElementProps) {
  return (
    <View style={style}>
      <Spline {...rest} />
    </View>
  );
}