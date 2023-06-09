import { Card, CardContent, Typography, Stack, Box } from "@mui/material";

interface IDashboardCard {
  title?: any;
  subtitle?: string;
  children?: any;
  action?: any;
  footer?: any;
  cardheading?: any;
  headtitle?: string;
  headsubtitle?: string;
  middlecontent?: string;
  id?: number;
}

const TextDashboardCard = ({
  title,
  subtitle,
  children,
  action,
  footer,
  cardheading,
  headtitle,
  headsubtitle,
  middlecontent,
}: IDashboardCard) => {
  return (
    <Card
      style={{ margin: 30, height: 450 }}
      sx={{ padding: 2 }}
      elevation={9}
      variant={undefined}
    >
      {cardheading ? (
        <CardContent>
          <Typography variant="h5">{headtitle}</Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {headsubtitle}
          </Typography>
        </CardContent>
      ) : (
        <CardContent sx={{ p: "20px" }}>
          {title ? (
            <Stack
              direction="row"
              spacing={1}
              justifyContent="space-between"
              alignItems={"center"}
              mb={3}
            >
              <Box>
                {title ? <Typography variant="h5">{title}</Typography> : ""}

                {subtitle ? (
                  <Typography variant="subtitle2" color="textSecondary">
                    {subtitle}
                  </Typography>
                ) : (
                  ""
                )}
              </Box>
              {action}
            </Stack>
          ) : null}

          {children}
        </CardContent>
      )}

      {middlecontent}
      {footer}
    </Card>
  );
};

export default TextDashboardCard;
