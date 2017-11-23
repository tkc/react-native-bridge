#import "CalendarManager.h"
#import <React/RCTLog.h>

@implementation CalendarManager

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location)
{
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}

RCT_REMAP_METHOD(findEvents,
                 findEventsWithResolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject){
  
  NSArray *event = [NSArray arrayWithObjects:@"A", @"B", @"C", nil];
  if (event) {
    resolve(event);
  } else {
    NSError *error = nil;
    reject(@"no_events", @"There were no events",error);
  }
}

@end
