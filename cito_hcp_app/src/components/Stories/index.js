import React from 'react'
import { StoryContainer, StoryH1, StoryWrapper, StoryCard, StoryIcon, StoryH2, StoryP, StoryDate, StorySource, Button } from './StoriesElements'
import Icon1 from '../../images/rcn1.png'
import Icon2 from '../../images/NHS-nursing-staff.png'
import Icon3 from '../../images/COVID-ICU.png'
import Icon4 from '../../images/petrol-pump.png'
import Icon5 from '../../images/Health-and-care-bill-image.png'
import Icon6 from '../../images/rcn2.png'

const Stories = () => {
    
    return (
       <>     
    <StoryContainer id="story"> 
    
        <StoryH1>Current News</StoryH1>
        
            <StoryWrapper>
                
                <StoryCard>
                    <StoryIcon src={Icon1} />
                    
                    <StoryDate>February 23, 2022</StoryDate>
                    <StoryH2 href="https://www.rcn.org.uk/news-and-events/news/uk-government-view-on-nhs-pay-shows-its-not-serious-about-fixing-nursing-workforce-crisis-230222" target="_blank" aria-label="Article 1"> Government's view on NHS pay shows it's not serious about fixing nursing workforce crisis</StoryH2>
                    <StoryP>RCN responds to government evidence to NHS Pay Review Body (PRB) which suggests staff in England get a 2-3% pay rise this year.</StoryP>
                    <StorySource>Source Royal College of Nursing</StorySource>
                    <Button> Learn More </Button>
                        
                </StoryCard>
                <StoryCard>
                    <StoryIcon src={Icon2} />
                    <StoryDate>September 17, 2020</StoryDate>
                    <StoryH2 href="https://www.rcn.org.uk/news-and-events/news/uk-staff-safety-at-risk-unless-nursing-shortages-are-addressed-170920" target="_blank" aria-label="Article 2" >Staff safety at risk unless nursing shortages are addressed</StoryH2>
                    <StoryP>The RCN is calling for urgent action to address the shortage of nursing staff across the health and care system. This includes giving nursing staff a meaningful pay rise.</StoryP>
                    <StorySource>Source Royal College of Nursing</StorySource>
                    <Button> Learn More </Button>
                </StoryCard>

                <StoryCard>
                    <StoryIcon src={Icon3} />
                    <StoryDate> January 6, 2022</StoryDate>
                    <StoryH2 href="https://www.rcn.org.uk/news-and-events/news/uk-post-covid-recovery-in-england-jeopardised-by-staff-shortages-report-finds-060122" target="_blank" aria-label="Article 3">Post COVID recovery in England jeopardised by staff shortages, report finds</StoryH2>
                    <StoryP>RCN responds to outcome of cross-party inquiry into tackling the backlog of care needs caused by the pandemic, calling for the government to get a grip on workforce planning.</StoryP>
                    <StorySource>Source Royal College of Nursing</StorySource>
                    <Button> Learn More </Button>
                </StoryCard>
                <StoryCard>
                    <StoryIcon src={Icon4} />
                    <StoryDate>April 4, 2022</StoryDate>
                    <StoryH2 href="https://www.rcn.org.uk/news-and-events/news/uk-rcn-writes-to-chief-nurses-mileage-rates-review-040422" target="_blank" aria-label="Article 4" >Fair mileage rates now: RCN writes to England’s chief nurses for support</StoryH2>
                    <StoryP>Our campaign for an urgent mileage rate review continues as cost-of-living crisis escalates. </StoryP>
                    <StorySource>Source Royal College of Nursing</StorySource>
                    <Button> Learn More </Button>
                </StoryCard>
                <StoryCard>
                    <StoryIcon src={Icon5} />
                    <StoryDate> March 25, 2022  </StoryDate>
                    <StoryH2 href="https://www.rcn.org.uk/news-and-events/news/uk-email-your-mp-for-final-chance-to-influence-health-and-care-bill-250322" target="_blank" aria-label="Article 5">Email your MP for final chance to influence Health and Care Bill </StoryH2>
                    <StoryP>The legislation has almost completed its passage through Parliament. Take two minutes to help us make sure it addresses England’s nursing workforce crisis. </StoryP>
                    <StorySource>Source Royal College of Nursing</StorySource>
                    <Button> Learn More </Button>
                </StoryCard>

                <StoryCard>
                    <StoryIcon src={Icon6} />
                    <StoryDate> February 8, 2022 </StoryDate>
                    <StoryH2 href="https://www.rcn.org.uk/news-and-events/news/uk-plan-to-tackle-nhs-backlog-aspirational-without-enough-nursing-staff-warns-rcn-080222" target="_blank" aria-label="Article 6">Plan to tackle NHS backlog 'aspirational' without enough nursing staff, warns RCN</StoryH2>
                    <StoryP>We’re urging the government to implement an integrated recovery plan for the NHS and social care.  </StoryP>
                    <StorySource>Source Royal College of Nursing</StorySource>
                    <Button> Learn More </Button>
                </StoryCard>
                
                
            </StoryWrapper>
    </StoryContainer>
    </>
  )
}

export default Stories