import { Controller, UseGuards, Post, Query, Req } from '@nestjs/common';
import { Request } from 'express';
import { PostLikesService } from './services/post-likes.service';

@Controller('post/likes')
export class PostLikesController {
	constructor(private postLikes: PostLikesService) {}

	@Post('like')
	async likePost(@Query('id') postId: string, @Req() req: Request) {
		await this.postLikes.applyLikeDislike(postId, req, true);
	}

	@Post('dislike')
	async dislikePost(@Query('id') postId: string, @Req() req: Request) {
		await this.postLikes.applyLikeDislike(postId, req, false);
	}

	@Post('unlike')
	async undislikePost(@Query('id') postId: string, @Req() req: Request) {
		await this.postLikes.removeLikeDislike(postId, req, true);
	}

	@Post('undislike')
	async unlikePost(@Query('id') postId: string, @Req() req: Request) {
		await this.postLikes.removeLikeDislike(postId, req, false);
	}
}
