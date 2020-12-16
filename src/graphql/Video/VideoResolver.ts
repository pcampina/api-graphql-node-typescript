import { Resolver, Query, Field, InputType, Mutation, Arg } from "type-graphql";
import Video from "./Video";
import VideoSchema from '../../model/VideoSchema';
import { Types } from "mongoose";

@InputType()
class VideoInput {
  @Field()
  description: string;

  @Field()
  name: string;

  @Field()
  category: string;

  _id: Types.ObjectId;
}

@Resolver(Video)
class VideoResolver {

  @Query(() => [Video])
  async videos() {
    const videos = await VideoSchema.find();
    return videos;
  }

  @Mutation(() => Video)
  async createVideos(@Arg('videoInput') videoInput: VideoInput) {
    const video = await VideoSchema.create(videoInput)
    return video;
  }
}

export default VideoResolver;
