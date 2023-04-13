
import { AU } from '../../../core/constants';
import { getJD } from '../../../utils/JD';

export const eros = {
	title: 'Eros',
	name: 'eros',
	mass: 6.687e15,
	radius: 8.4,
	color: '#999999',
	orbit: {
		epoch: 2460000.5,
		base: {
			a: 1.45812914 * AU,
			e: 0.22278189, 
			w: 178.93, 
			M: 110.77765267464,
			i: 10.82782330,
			o: 80.260148690589,  
		},
		day: {
			a: 0,
			e: 0,
			i: 0,
			M: 0.214110998,
			w: 0,
			o: 0,
		},
	},
};
