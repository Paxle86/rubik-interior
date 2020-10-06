import React, { useState } from 'react'
import {
	HeroContainer,
	HeroBg,
	VideoBg,
	HeroBtnWrapper,
	HeroContent,
	HeroH1,
	HeroP,
	ArrowForward,
	ArrowRight,
} from './HeroElement'
import { Button } from '../ButtonElement'
import Video from '../../videos/video.mp4'

const HeroSection = () => {
	const [hover, setHover] = useState(false)
	const onHover = () => {
		setHover(!hover)
	}
	return (
		<HeroContainer>
			<HeroBg id='home'>
				<VideoBg autoPlay loop muted src={Video} type='video/mp4' />
			</HeroBg>
			<HeroContent>
				<HeroH1>Nội thất Rubik dẫn đầu xu hướng</HeroH1>
				<HeroP>Phong cách sáng tạo</HeroP>
				<HeroBtnWrapper>
					<Button
						to='signup'
						onMouseEnter={onHover}
						onMouseLeave={onHover}
						primary='true'
						dark='true'
					>
						Xem thêm {hover ? <ArrowForward /> : <ArrowRight />}
					</Button>
				</HeroBtnWrapper>
			</HeroContent>
		</HeroContainer>
	)
}

export default HeroSection
