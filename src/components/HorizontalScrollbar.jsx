import { Box, Typography } from '@mui/material'
import { useContext } from 'react'
import BodyPart from './BodyPart'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
	return (
		<ScrollMenu>
			{data.map((item) => (
				<Box
					key={item.id || item}
					itemId={item.id || item}
					title={item.id || item}
					m="0 40px"
				>
					<BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
				</Box>
			))}
		</ScrollMenu>
	)
}

export default HorizontalScrollbar
