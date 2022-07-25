import React, { useState } from 'react'
import { CircularProgress, Grid, Typography } from '@mui/material'
import { BaseLayout } from '../../components/BaseLayout'
import { Card } from '../../components/Elements/Card'
import { ModalDialog } from '../../components/Modals/ModalDialog'
import { useModal } from '../../hooks/useModal'
import MDButton from '../../components/MDButton'

export const SelectTheme = () => {
	const themes = [
		{
			name: 'Tema 1',
			imgMain: '/assets/images/theme/theme_1_1.png',
			colors: { primary: '#ff758c', secondary: '#ff7eb3' },
			previewImages: [
				'/assets/images/theme/theme_1_1.png',
				'/assets/images/theme/theme_1_2.png',
			]
		},
		{
			name: 'Tema 2',
			imgMain: '/assets/images/theme/theme_1_3.png',
			colors: { primary: '#b7f8db', secondary: '#50a7c2' },
			previewImages: [
				'/assets/images/theme/theme_1_3.png',
				'/assets/images/theme/theme_1_4.png',
			]
		}
	]

	const [loadingPreview, setLoadingPreview] = useState(false)
	const { open, handleOpen, handleClose, content, setContent } = useModal()
	const openPreview = (index) => {
		setLoadingPreview(true)
		handleOpen()
		setContent({ nameTheme: themes[index].name, previewImages: themes[index].previewImages })
		setTimeout(() => { setLoadingPreview(false) }, 1000)

	}

	const closePreview = () => {
		handleClose()
		setLoadingPreview(false)
	}

	return (
		<BaseLayout>
			<>
				<ModalDialog
					open={open}
					dialogTitle={
						<Typography>{content.nameTheme}</Typography>
					}
					dialogContent={
						<Grid container justifyContent={'center'}>
							{
								loadingPreview
									?
									<CircularProgress />
									:
									<Grid item>
										{
											content.previewImages && content.previewImages.map(previewImg => (
												<img src={`${previewImg}`} height={'380px'} width='500px' style={{ objectFit: 'contain' }} />
											))
										}
									</Grid>
							}
						</Grid>
					}
					buttonClose={true}
					dialogActions={
						!loadingPreview
						&&
						<MDButton
							variant='contained'
							color='primary'
							size='small'
							fontWeight={'bold'}
							fontSize={'20px'}
							circular={true}>
							Seleccionar
						</MDButton>
					}
					handleClose={closePreview}
					dividers={true}
				/>
				<Grid container direction="column" height="100%" rowSpacing={1}>
					<Grid item>
						<Typography color={'black'} variant={'d4'}>
							Temas
						</Typography>
					</Grid>
					<Grid item xs={3.5}>
						<Grid container height={'100%'}>
							{
								themes.map((theme, index) =>
									<Card
										key={index}
										id={index}
										nameTheme={theme.name}
										colors={theme.colors}
										actionButton={() => { openPreview(index) }}
										imgMain={theme.imgMain} />
								)
							}
						</Grid>
					</Grid>
				</Grid>
			</>
		</BaseLayout>
	)
}
