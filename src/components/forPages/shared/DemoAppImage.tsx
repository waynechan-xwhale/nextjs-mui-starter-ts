import { Card, CardContent, CardHeader, Stack } from '@mui/material';
import React from 'react';
import { AppImage } from 'src/components';

/**
 * Renders "Demo Section" for AppImage component
 * @component DemoAppImage
 */
const DemoAppImage = () => {
  return (
    <Card>
      <CardHeader title="AppImage" subheader="Pre-configured Next.js Image" />
      <CardContent sx={{ py: 0 }}>
        <Stack direction="row" flexWrap="wrap" justifyContent="center" alignItems="center">
          <AppImage src="/img/logo.svg" title="Default image with only .src property specified" />
          {/* <AppImage src="/img/logo.svg" title="Image with low quality" quality={5} /> */}
          <AppImage
            width={192}
            height={192}
            title="Blurred placeholder, for loading or missing files"
            placeholder="blur"
            blurDataURL="/img/favicon/32x32.png"
            // src="https://karpolan.com/me.jpg"
            src="/img/bad-file-name.svg"
          />
          <AppImage width={128} height={128} title="32x32 image scaled to 128x128" src="/img/favicon/32x32.png" />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default DemoAppImage;
