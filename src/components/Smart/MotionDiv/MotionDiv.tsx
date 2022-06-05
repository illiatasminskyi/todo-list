import { motion } from 'framer-motion'
import { FC } from 'react'

interface MotionDivType {
	children: JSX.Element
	variant: string
	PX: number
}

const MotionDiv: FC<MotionDivType> = ({ children, variant, PX }) => {
	const vY = {
		initial: { y: PX, opacity: 0 },
		animate: { y: 0, opacity: 1 },
		exit: { y: PX, opacity: 0 },
	}
	const vX = {
		initial: { x: PX, opacity: 0 },
		animate: { x: 0, opacity: 1 },
		exit: { x: PX, opacity: 0 },
	}

	const vv = variant === 'vY' ? vY : vX

	return (
		<motion.div
			initial='initial'
			animate='animate'
			exit='exit'
			variants={vv}
			transition={{
				duration: 0.5,
				delay: 0.0,
			}}
		>
			{children}
		</motion.div>
	)
}
export default MotionDiv
